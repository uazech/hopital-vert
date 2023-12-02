import {Metric} from "./Metric";
import {Button, Grid, Modal} from "@mui/material";
import Box from "@mui/material/Box";
import {ScoreCollectif} from "./ScoreCollectif";
import {Bar} from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import * as React from "react";
import {ResponseModal} from "./ResponseModal";
import {useEffect, useState} from "react";
import {getAllResponses} from "../../../storage/firebase-db";
import {questions} from "../../../questions";
import {getData, getOptions, getYAxis} from "./QuestionGraph";

const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    overflowY: "scroll",
    maxHeight: "90%",
    width: 800,
    bgcolor: 'background.paper',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};

export default function Suivi(props){
    const session = props.session
    const [responses, setResponses] = useState([]);
    const [open, setOpen] = React.useState(false);
    const [showMetrics, setShowMetrics] = React.useState(false);
    const [index, setIndex] = React.useState(0);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    }
    useEffect(() => {
        async function getResponses() {
            const responsesData = await getAllResponses(session);
            const responses = [];
            responsesData.forEach(response => responses.push(response.data()))
            setResponses(responses);
        }

        getResponses();
        const interval = setInterval(() => getResponses(), 10000)
        return () => {
            clearInterval(interval);
        }
    }, [session])

    function callBack(index) {
        setIndex(index)
        handleOpen();
    }

    const xAxis = questions.map((_, index) => "Question " + (index + 1));
    const yAxis = getYAxis(responses, xAxis);
    const data = getData(xAxis, yAxis);
    const options = getOptions(yAxis, callBack);
    return <>
        <Metric value={responses.length} title={"Nombre de répondants :"} width={6}/>
        <Grid item xs={6}>
            <Box
                sx={{
                    bgcolor: 'background.paper',
                    boxShadow: 1,
                    borderRadius: 1,
                    height: '7vh',
                    textAlign: 'center',
                    p: 2,

                }}
            >
                <Button
                    onClick={() => setShowMetrics(!showMetrics)}>{showMetrics ? "Masquer le score collectif" : "Afficher le score collectif"}</Button>
            </Box>
        </Grid>
        <ScoreCollectif responses={responses} display={showMetrics}/>

        <Grid item xs={12}>
            <Box
                sx={{
                    bgcolor: 'background.paper',
                    boxShadow: 1,
                    borderRadius: 1,
                    p: 2,
                }}
            >
                <Box sx={{color: 'text.secondary'}}> Avancé des joueurs : </Box>
                <Bar height={'70vh'} plugins={[ChartDataLabels]} options={options} data={data}/>
            </Box>
        </Grid>
        <React.Fragment>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="child-modal-title"
                aria-describedby="child-modal-description"
            >
                <Box sx={{...modalStyle, width: 1000}}>
                    <ResponseModal index={index} responses={responses}/>
                    <Button onClick={handleClose}>Fermer</Button>
                </Box>
            </Modal>
        </React.Fragment>
    </>
}