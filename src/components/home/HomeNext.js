import * as React from 'react';
import {BottomNavigation, Paper} from "@mui/material";
import StartIcon from '@mui/icons-material/Start';
import {BottomStyled} from "../BottomStyled";
import ProgressBar from "../ProgressBar";


export default function HomeNext() {


    return (

        <Paper sx={{position: 'fixed', bottom: 0, left: 0, right: 0, height: '8vh'}} elevation={3}>
            <ProgressBar page={1}/>

            <BottomNavigation
                showLabels
            >
                <BottomStyled icon={<StartIcon/>} label="Démarrer" href={"situation"}/>
            </BottomNavigation>
        </Paper>
    );
}