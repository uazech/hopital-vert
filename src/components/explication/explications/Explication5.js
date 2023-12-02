import * as React from "react";
import {Card, CardContent} from "@mui/material";

export default function Explication5() {
    return (

        <>
            <p>
                Le choix des DMs et médicaments, largement utilisés au bloc, a un impact important sur les coûts et le
                bilan carbone de l'hôpital.

            </p>
            <p>
                <span style={{fontWeight: "bold"}}>L’affichage environnemental</span>, expérimenté dans plusieurs
                établissements, a prouvé son potentiel de
                réduction de consommation de DM, jusqu’à -50%, cf. exemple d’Auxerre. L’impact dépend cependant de la
                pratique initiale de l’établissement.
            </p>
            <p>
                <span style={{fontWeight: "bold"}}>L’option 3</span> est socialement très compliquée à mettre en œuvre
                mais apporte une vraie plus-value
                environnementale et potentiellement financière.
            </p>
            <Card>
                <CardContent>
                    <span style={{fontWeight: "bold"}}>CH d’Auxerre : </span>
                        une expérimentation d’affichage des critères environnementaux à l’arsenal du bloc a
                        effectivement eu une incidence significative sur la préparation des paniers d’intervention, avec
                        une réduction de consommation de DMs entre 20 et 50% sur les 3 types d’interventions testées au
                        CH d’Auxerre.


                </CardContent>

            </Card>
        </>

);
}
