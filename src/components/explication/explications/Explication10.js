import * as React from "react";
import {Card, CardContent} from "@mui/material";

export default function Explication10() {
    return (

        <>
            <p>
                L'hémodialyse conventionnelle en centre est associée à une empreinte environnementale importante : elle
                est énergivore, utilise des volumes importants d'eau ultrapure, nécessite l'utilisation de consommables
                pour la plupart à usage unique (matériaux dérivés du plastique), est productrice de déchets et implique
                de nombreux déplacements pour les patients qui se rendent à leur centre 3 fois/semaine.
            </p>
            <p>
                Au total, l'empreinte carbone pour un centre de dialyse se situe entre 5 et 10 tCO2e par an et par
                patient selon les différentes études sur le sujet.
            </p>
            <p>
                <span style={{fontWeight: "bold"}}>Ouvrir un centre de dialyse conventionnel</span> alourdit l’empreinte
                carbone de l’établissement mais permet
                toutefois de satisfaire un besoin de santé territorial et permet d’augmenter l’activité et les recettes
                de l’établissement.

            </p>
            <p>
                <span style={{fontWeight: "bold"}}>Ne pas répondre aux sollicitations de l’ARS</span> et chercher
                à <span style={{fontWeight: "bold"}}>réduire son empreinte environnementale en
                réduisant l’offre de soins nécessaires n’est pas une solution éthiquement et socialement acceptable</span>.
                En
                outre, le besoin sera finalement satisfait par un autre établissement du territoire, ce qui ne permettra
                pas de faire baisser l’empreinte carbone globale.
            </p>
            <p>
                <span style={{fontWeight: "bold"}}>Ouvrir un centre de dialyse passif</span>, comme suggéré par la
                Société Francophone de Néphrologie Dialyse et
                Transplantation (SFNDT) dans son guide des bonnes pratiques de la dialyse verte permet de limiter
                l’augmentation des émissions de GES par le respect d’une norme de construction durable du bâtiment.

            </p>
            <Card>
                <CardContent>
                    A titre d’exemple, le centre de dialyse Artic 42 à Saint-Priest-en-Jarez (Loire), inauguré en 2019,
                    fut le premier bâtiment hospitalier passif au monde. Toutefois, construire ce genre de bâtiment
                    nécessite de lourds investissements ce qui diminue le retour sur investissement du projet.
                </CardContent>

            </Card>

        </>

    );
}
