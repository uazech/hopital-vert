import Typography from "@mui/material/Typography";
import * as React from "react";
import QuestionNext from "./QuestionNext";
import {useNavigate, useParams} from "react-router-dom";
import {questions} from "../../questions";
import {useEffect, useState} from "react";
import Reponses from "./Reponses";
import {getQuestionNumber} from "../../storage/storage";

export default function Question() {
    const questionNumber = useParams().number
    const question = questions[questionNumber - 1]
    const [selected, setSelected] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
        let lastAnsweredQuestion = getQuestionNumber();
        if(lastAnsweredQuestion >= parseInt(questionNumber)){
            const href = "/explication/" + questionNumber + "?cancelReturn=true";
            navigate(href);
        }
    }, );

    return (
        <div>
            <Typography variant="h5" component="div" sx={{}}>
                {question["titre"]}
            </Typography>
            <Typography variant="body1" component="div" sx={{ marginTop: 1, textAlign: 'justify'}}>
                {question["question"]}
            </Typography>
            <Reponses setSelected={setSelected} reponses={question["reponses"]}/>
            <div style={{marginBottom:'7vh'}}/>
            <QuestionNext selected={selected} number={questionNumber}/>
        </div>
    );
}

