import * as React from "react";
import {Card, CardContent} from "@mui/material";
import Typography from "@mui/material/Typography";

export default function Explication1() {
    return (

        <>
            <p>
                La majeure partie des émissions d’un bâtiment déjà construit relève de l’usage de ses équipements
                (chauffage, refroidissement, eau chaude sanitaire, etc.).
            </p>
            <p>
                Il existe plusieurs manières de réduire la consommation d’énergie liée au chauffage :
            </p>
            <p>
                La <span style={{fontWeight: "bold"}}>sobriété énergétique</span> qui passe par exemple par la <span
                style={{fontWeight: "bold"}}>limitation de la température des bâtiments</span>, est la
                solution qui baisse le moins les émissions carbone mais qui ne nécessite aucun investissement financier.
                Elle peut avoir des répercussions « sociales » sur la qualité de vie au travail des agents et sur la
                qualité de la prise en charge des patients.
            </p>
            <p>
                <span style={{fontWeight: "bold"}}>Le raccordement au réseau de chauffage urbain</span> est une solution
                qui nécessite de gros investissements et
                la présence d’un réseau urbain auquel se raccorder. Toutefois, lorsqu’elle est possible, cette solution
                permet de faire de fortes économies sur la facture énergétique et permet de réduire considérablement les
                émissions de GES.
            </p>
            <Card>
                <CardContent>
                    A titre d’exemple, les travaux de raccordement du CH de Bourges au réseau de chauffage urbain ont
                    coûté 13 millions (50 % ont été pris en charge par l’Ademe) mais ont permis de réduire de 50 % la
                    facture énergétique et de 6 000 tonnes par an les émissions de CO2.
                </CardContent>

            </Card>
            <p>
                <span style={{fontWeight: "bold"}}>L’isolation thermique des bâtiments </span> permet elle aussi de
                réduire significativement les émissions de GES
                en résorbant l’effet « passoire énergétique ». Toutefois, cette solution peut impliquer
                d’importants travaux et d’importants financements.
            </p>
            <Card>
                <CardContent>
                    Solution choisie par les <span style={{fontWeight:"bold"}}> Hospices Civils de Lyon </span>: dans le cadre de son plan de sobriété énergétique
                    de 2022, l’établissement a décidé de réduire à 19°C la température dans les bureaux et dans les
                    espaces hospitaliers sans nuire à la qualité des soins.
                </CardContent>

            </Card>
            <Typography variant={"h6"} component={"span"}>
                Pour aller plus loin :
            </Typography>
            <p>
                Loi n°2018-1021 du 23 novembre 2018 dite ÉLAN (art. 175)
                <br/>
                “Décret éco-énergie tertiaire” n°2019-771 du 23 juillet 2019
                <br/>
                <a href="https://theshiftproject.org/article/decarboner-ladministration-publique-rapport-octobre-2021/">Rapport
                    du Shift Project d'octobre 2021</a>

                <br/>
                <a href="https://theshiftproject.org/article/decarboner-sante-rapport-2023/">Shift Project : décarboner
                    la santé 2023</a>

            </p>
        </>

    )
        ;
}
