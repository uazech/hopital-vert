import * as React from 'react';
import {BottomNavigation, DialogTitle, IconButton, Modal, Paper} from "@mui/material";
import DoneIcon from '@mui/icons-material/Done';
import {useNavigate} from "react-router-dom";
import {
    getScoreEnvironnemental,
    getSoldeFinancier,
    getSoldeSocial, setQuestionNumber, setResponse, setScoreEnvironnemental,
    setSoldeFinancier, setSoldeSocial
} from "../../storage/storage";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {BottomStyled} from "../BottomStyled";
import ProgressBar from "../ProgressBar";
import {saveResponse} from "../../storage/firebase-db";
import CloseIcon from '@mui/icons-material/Close';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: 24,
    width: '70%',
    p: 4,
};
const closeStyle = {
    top: 0,
    position: "absolute",
    right: 0,
    justifyContent: "space-between",
    alignItems: "center"
}


function onSubmitQuestion(openModal, navigate, questionNumber, reponse) {
    if (reponse === null) {
        return;
    }
    const nouveauSoldeFinancier = getSoldeFinancier() + reponse["impact_financier"];
    const nouveauSoldeSocial = getSoldeSocial() + reponse["impact_social"];
    const nouveauScoreEnvironnemental = getScoreEnvironnemental() + reponse["impact_environnemental"];
    if (nouveauSoldeFinancier < 0) {
        openModal("financier")
    } else if (nouveauSoldeSocial < 0) {
        openModal("social")
    } else {
        saveResponse(questionNumber, reponse, nouveauSoldeFinancier, nouveauSoldeSocial, nouveauScoreEnvironnemental).then(r => {
            setScoreEnvironnemental(nouveauScoreEnvironnemental);
            setSoldeFinancier(nouveauSoldeFinancier);
            setSoldeSocial(nouveauSoldeSocial);
            setQuestionNumber(questionNumber);
            setResponse(reponse);
            const href = "/explication/" + questionNumber;
            navigate(href);
        })

    }

}

const TextSoldeSocial = () => {
    return <Typography variant="body1" component="div">
        <p>
            Si vous faites ce choix, vous aggraverez la situation sociale à un tel point que votre CODIR sera séquestré
            par un groupe d’agents.
        </p>
        <p>
            Vous devez faire attention à votre impact social.
        </p>
    </Typography>
}

const TextSoldeFinancier = () => {
    return <Typography variant="body1" component="span">
        <p>
            Si vous faites ce choix, vous aggraverez la situation financière à un tel point que votre établissement sera
            placé sous administration provisoire de l’ARS.
        </p>
        <p>
            Vous devez faire attention à votre impact financier.
        </p>
    </Typography>
}
export default function QuestionNext(props) {
    const reponse = props.selected;
    const number = parseInt(props.number);
    const navigate = useNavigate();
    const [open, setOpen] = React.useState(false);
    const [soldeManquant, setSoldeManquant] = React.useState("financier");
    const handleOpen = (soldeManquant) => {
        setOpen(true)
        setSoldeManquant(soldeManquant)
    };
    const handleClose = () => setOpen(false);
    return (
        <>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <DialogTitle style={closeStyle}>
                        <IconButton aria-labelledby={"fermer-solde-insuffisant"} onClick={handleClose}>
                            <CloseIcon/>
                        </IconButton>
                    </DialogTitle>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Solde insuffisant
                    </Typography>
                    {soldeManquant === 'financier' ? <TextSoldeFinancier/> : <TextSoldeSocial/>}
                </Box>


            </Modal>
            <Paper sx={{position: 'fixed', bottom: 0, left: 0, right: 0, height: '8vh'}} elevation={3}>
                <ProgressBar page={2 + (number * 2)}/>

                <BottomNavigation
                    showLabels
                    onClick={() => onSubmitQuestion(handleOpen, navigate, number, reponse)}
                    aria-disabled={reponse === null}
                >
                    <BottomStyled
                        role="button" disabled={reponse === null} icon={<DoneIcon/>} label="Valider"
                    />
                </BottomNavigation>
            </Paper>
        </>

    );
}