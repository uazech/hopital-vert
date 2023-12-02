import {LinearProgress} from "@mui/material";
import * as React from "react";
import {questions} from "../questions";

export default function ProgressBar(props){
    const nombreTotalDePage = 4 + (questions.length * 2)
    const progress = Math.floor((props.page / nombreTotalDePage) * 100)

    return <>
        <LinearProgress variant="determinate" value={progress}/>
    </>
}