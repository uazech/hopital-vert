import DisclaimerNext from "./DisclaimerNext";
import Typography from "@mui/material/Typography";
import * as React from "react";
import {initData} from "../../storage/storage";
import {useSearchParams} from "react-router-dom";

export default function Disclaimer() {
    const searchParams = useSearchParams()[0];
    const session = searchParams.get("session");
    initData(session)
    return (

        <>
            <Typography variant="h5" component="span">
                Disclaimer
            </Typography>
            <Typography variant="body1" component="div" sx={{ textAlign: "justify"}}>

                <p style={{fontWeight: "bold"}}>
                    ⚠️ &nbsp; Ce jeu est à visée de sensibilisation, il ne garantit pas l’exactitude des
                        données, celles-ci sont basées sur des estimations.
                </p>
                <p>
                    Mon hôpital vert vous donne le sens des impacts que pourraient avoir vos décisions, sans présumer de
                    l’ensemble des facteurs qui pourraient interagir en conditions réelles.
                </p>
                <p style={{fontWeight: "bold"}}>
                    ⚙️ &nbsp; Mon hôpital vert est la première version du jeu, elle  fait l’objet d’un processus d’amélioration continue.
                </p>
                <p>
                    Si vous souhaitez donner votre avis pour contribuer à l’amélioration du jeu, vous pouvez laisser un commentaire à la fin de celui-ci.
                </p>
            </Typography>
            <div style={{marginBottom: '10vh'}}/>
            <DisclaimerNext/>
        </>
    );
}

