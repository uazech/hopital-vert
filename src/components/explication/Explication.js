import Typography from "@mui/material/Typography";
import * as React from "react";
import ExplicationNext from "./ExplicationNext";
import {useParams, useSearchParams} from "react-router-dom";
import {questions} from "../../questions";
import ScrollToTop from "../ScrollToTop";
import {Solde} from "../Solde";
import {Alert, Snackbar} from "@mui/material";
import {getImpactEnvironnemental} from "../../storage/storage";

function getAlerte(impactEnvironnemental) {
    if (impactEnvironnemental < 0) {
        return <Alert severity="info">
            Vous avez baissé votre empreinte carbone de {impactEnvironnemental * -1} tCO2.
        </Alert>
    } else if (impactEnvironnemental > 0) {
        return <Alert severity="warning">
            Vous avez augmenté votre empreinte carbone de {impactEnvironnemental} tCO2.
        </Alert>
    }
    return <Alert severity="info">
        Votre empreinte carbone reste inchangé.
    </Alert>
}

export default function Explication() {
    const questionNumber = useParams().number
    const question = questions[questionNumber - 1]
    const [searchParams, setSearchParams] = useSearchParams();
    let cancelReturn = searchParams.get("cancelReturn");
    let impactEnvironnemental = getImpactEnvironnemental();

    function handleClose() {
        setSearchParams({})
    }

    return (

        <div>
            <Snackbar
                open={!!cancelReturn}
                onClose={handleClose}
                message="Note archived"
                color={"error"}
                anchorOrigin={{vertical: "top", horizontal: "center"}}

            >
                <Alert onClose={handleClose} severity="error" sx={{width: '100%'}}>
                    Retour arrière impossible!
                </Alert>
            </Snackbar>
            <ScrollToTop/>

            <Typography variant="h5" component="div" sx={{marginBottom: 2}}>
                Votre nouveau solde:
            </Typography>
            {getAlerte(impactEnvironnemental)}
            <br/>
            <Solde displayCout={true}/>
            <Typography variant="body1" component="div" sx={{marginTop: 1, textAlign: 'justify'}}>
                {question["explication"]}
            </Typography>
            <div style={{marginBottom: '8vh'}}/>
            <ExplicationNext number={questionNumber}/>
        </div>
    );
}

