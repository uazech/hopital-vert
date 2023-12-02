import * as React from 'react';
import {BottomNavigation, Paper} from "@mui/material";
import {questions} from "../../questions";
import {BottomStyled} from "../BottomStyled";
import ProgressBar from "../ProgressBar";
import LoopIcon from '@mui/icons-material/Loop';

export default function CreditsNext() {


    return (
        <Paper sx={{position: 'fixed', bottom: 0, left: 0, right: 0, height:'8vh'}} elevation={3}>
            <ProgressBar page={4 + (questions.length * 2)}/>
            <BottomNavigation showLabels>
                <BottomStyled
                    icon={<LoopIcon/>}
                    label="Recommencer"
                    href={"/"}
                />
            </BottomNavigation>
        </Paper>
    );
}