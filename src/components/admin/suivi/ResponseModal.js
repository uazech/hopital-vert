import {questions} from "../../../questions";
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import * as React from "react";
import Typography from "@mui/material/Typography";
import {BarChart} from "@mui/x-charts";

function createData(title, impact_financier, impact_social, impact_environnemental) {
    return { title, impact_financier, impact_social, impact_environnemental };
}

export function ResponseModal(props){
    const index = props.index;
    let questionResponses = questions[index]["reponses"];
    let rows = questionResponses.map(response => createData(response["label"], response["impact_financier"], response["impact_social"], response["impact_environnemental"] ));
    let questionNumber = index + 1;
    const allResponses = []
    props.responses.forEach(playerResponses => {
        if(questionNumber in playerResponses['responses']){
            allResponses.push(playerResponses['responses'][questionNumber])
        }
    })

    const numberPerResponse = {};
    const questionsNumbers = questionResponses.map((response, index) => "Réponse " + (index+1));

    questionResponses.forEach((response) => numberPerResponse[response["label"]] = 0);
    allResponses.forEach((response) => {
        if(numberPerResponse.hasOwnProperty(response["label"])){
            numberPerResponse[response["label"]]+=1;
        }
    });
    return <>
        <Typography variant="h5" component="div">
            {questions[index]["titre"]}
        </Typography>
        <Typography variant="body1" component="div" >
            {questions[index]["question"]}
        </Typography>
        <TableContainer component={Paper}>
            <Table aria-label="Impact environmental des réponses">
                <TableHead>
                    <TableRow>
                        <TableCell>Réponse</TableCell>
                        <TableCell sx={{fontWeight: 'bold'}} align="right">Impact financier</TableCell>
                        <TableCell sx={{fontWeight: 'bold'}} align="right">Impact social </TableCell>
                        <TableCell sx={{fontWeight: 'bold'}} align="right">Impact environnemental</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.title}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell>
                                {row.title}
                            </TableCell>
                            <TableCell align="right">{row.impact_financier}</TableCell>
                            <TableCell align="right">{row.impact_social}</TableCell>
                            <TableCell align="right">{row.impact_environnemental}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        <BarChart

            xAxis={[
                {
                    id: 'barCategories',
                    data: questionsNumbers,
                    scaleType: 'band',
                },
            ]}
            series={[
                {
                    data: Object.values(numberPerResponse),
                },
            ]}
            height={300}
        />
        <Typography variant="h5" component="div" >
            Explication:
        </Typography>
        <Typography variant="body1" component="div" >
            {questions[index]["explication"]}
        </Typography>

    </>
}