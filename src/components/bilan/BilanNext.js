import * as React from 'react';
import {BottomNavigation, Paper} from "@mui/material";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import {BottomStyled} from "../BottomStyled";
import ProgressBar from "../ProgressBar";


export default function BilanNext() {


    return (
        <Paper sx={{position: 'fixed', bottom: 0, left: 0, right: 0, height: '8vh'}} elevation={3}>
            <ProgressBar page={3}/>
            <BottomNavigation
                showLabels
            >
                <BottomStyled icon={<NavigateBeforeIcon/>} label="Précédent" href={"/situation"}/>
                <BottomStyled icon={<NavigateNextIcon/>} label="Commencer" href={"question/1"}/>
            </BottomNavigation>
        </Paper>
    );
}