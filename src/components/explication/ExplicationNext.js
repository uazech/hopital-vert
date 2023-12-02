import * as React from 'react';
import {BottomNavigation, Paper} from "@mui/material";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import {questions} from "../../questions";
import {BottomStyled} from "../BottomStyled";
import ProgressBar from "../ProgressBar";


export default function ExplicationNext(props) {


    let questionNumber = parseInt(props.number);
    let newNumber = questionNumber + 1;
    let href = "/question/" + newNumber
    if (questionNumber === questions.length) {
        href = "/fin"
    }
    return (
        <Paper sx={{position: 'fixed', bottom: 0, left: 0, right: 0, height:'8vh'}} elevation={3}>
            <ProgressBar page={3 + (questionNumber * 2)}/>
            <BottomNavigation showLabels>
                <BottomStyled
                    icon={<NavigateNextIcon/>}
                    label="Continuer"
                    href={href}
                />
            </BottomNavigation>
        </Paper>
    );
}