import * as React from 'react';
import {BottomNavigation, Paper} from "@mui/material";
import {BottomStyled} from "../BottomStyled";
import ProgressBar from "../ProgressBar";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";


export default function DisclaimerNext() {
    return (

        <Paper sx={{position: 'fixed', bottom: 0, left: 0, right: 0, height: '8vh'}} elevation={3}>
            <ProgressBar page={1}/>

            <BottomNavigation
                showLabels
            >
                <BottomStyled icon={<NavigateBeforeIcon/>} label="Précédent" href={"/"}/>
                <BottomStyled icon={<NavigateNextIcon/>} label="Suivant" href={"/situation"}/>
            </BottomNavigation>
        </Paper>
    );
}