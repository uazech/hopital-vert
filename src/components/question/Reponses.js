import * as React from "react";
import {FormControl, FormControlLabel, FormLabel, Radio, RadioGroup} from "@mui/material";

export default function Reponses(props) {
    const reponses = props.reponses
    return (
        <FormControl>
            <FormLabel>Votre réponse : </FormLabel>
            <RadioGroup
                aria-labelledby="response-radio-button-group-label"
                onChange={event => props.setSelected(reponses[event.target.value])}
            >
                {reponses.map((reponse, index) => <Reponse key={index} value={index} label={reponse["label"]}/>)}
            </RadioGroup>
        </FormControl>
    );
}

function Reponse(props) {
    return (
        <FormControlLabel sx={{marginY: 1}} value={props.value} control={<Radio/>} label={props.label}/>
    );
}
