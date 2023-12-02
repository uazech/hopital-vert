import SituationNext from "./SituationNext";
import Typography from "@mui/material/Typography";
import * as React from "react";
import {Solde} from "../Solde";

export default function Situation() {
    return (
        <>
            <Typography variant="h5" component="span" >
                Votre établissement
            </Typography>
            <Typography variant="body1" component="div" sx={{ textAlign: "justify"}}>
                <p>
                    Votre établissement est un centre hospitalier de 1000 lits, 3500 agents et dispose d’un budget
                    annuel de 250 millions d’euros.
                </p>
                <p>
                    Sa situation financière est relativement saine, endetté à 35%, l’établissement a des résultats
                    annuels positifs depuis 2022. Son niveau de vétusté est toutefois légèrement supérieur à la moyenne
                    des établissements français.
                </p>
                <p>
                    La situation sociale de l’établissement est assez calme. Vous avez une bonne relation avec les
                    représentants syndicaux. Vous avez toutefois connaissance d’une situation passée plus tendue au sein
                    de l’établissement, et vous savez donc qu’ils peuvent être particulièrement mobilisateurs.
                </p>
                <p>
                    La question environnementale a été peu étudiée par vos prédécesseurs, votre établissement est dans la
                    moyenne des hôpitaux français, sans faire particulièrement d’effort dans le sens de la transition
                    écologique.
                </p>
            </Typography>
            <Typography variant="h5" component="div" sx={{marginTop: 2, marginBottom: 2}}>
                Votre solde:
            </Typography>
            <Solde/>
            <div style={{marginBottom: '8vh'}}/>
            <SituationNext/>
        </>
    );
}

