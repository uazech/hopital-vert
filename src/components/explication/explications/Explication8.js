import * as React from "react";
import {Card, CardContent} from "@mui/material";

export default function Explication8() {
    return (

        <>
            <p>
                La <span style={{fontWeight: "bold"}}>suppression des imprimantes individuelles</span> a fait ses
                preuves dans la réduction des impressions.
            </p>
            <p>
                La consommation de papier, d’encre et de matériel a un impact à la fois financier et
                environnemental. Il faut toutefois considérer aussi l’impact environnemental et social du numérique.
            </p>
            <p>
                Pour cela, la récente <a
                href={"https://solutionsbtob.laposte.fr/sites/p8_u3/files/BROCHURE-ACV-WEB.pdf"}
                aria-label={"Lien vers l'étude"}>étude</a> de la poste est instructive. Contre-intuitivement, sur la
                majorité des cas d’usage étudiés, le papier a des indicateurs environnementaux plus vertueux que le
                numérique. Il l’est systématiquement pour la consommation des ressources fossiles, en métaux et
                minéraux.
            </p>
            <p>
                L’impact social est défavorable pour la suppression des imprimantes individuelles, mais également pour
                l’instauration de tablettes individuelles.
            </p>
            <Card>
                <CardContent>
                    <span style={{fontWeight: "bold"}}>Hôpital de la Châtre</span> : Le Service de soins infirmiers à
                    domicile (SSIAD) a équipé en 2018 son
                    personnel soignant de tablettes numériques. Plus de papier, désormais tout est informatisé. Le
                    système mobile est relié à un logiciel de télégestion, sur un réseau de données sécurisées. Neuf
                    tablettes ont été acquises, pour 18.711 €, comprenant l’installation, deux jours de formation pour
                    le personnel utilisateur, la maintenance et l’évolution du système.
                </CardContent>

            </Card>


        </>

    );
}
