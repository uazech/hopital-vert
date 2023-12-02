import * as React from "react";
import {Card, CardContent, List, ListItem} from "@mui/material";

export default function Explication2() {
    return (

        <>
            <p>
                <span style={{fontWeight: "bold"}}>Agir sur le gaspillage</span>: une étude de l’ADEME estime à 20 % le
                gaspillage en restauration collective dans
                le secteur de la santé. Ainsi, 1,0 MtCO2e proviendraient d’aliments jetés. De plus, la quantité
                d’emballages par repas à 133 g de papier/carton et de plastique, ce qui pourrait représenter 10% des
                émissions des repas. Ce poste d’action est donc régulièrement choisi pour agir rapidement, tout en
                permettant d’économiser certaines dépenses.
            </p>
            <p>
                <span style={{fontWeight: "bold"}}>Agir sur les repas végétariens</span> est l’option qui réduit le plus
                les émissions : selon le calculateur
                carbone de l’ADEME, 1 repas préparé en collectivité avec du bœuf équivaut en coût carbone à 4 repas avec
                du poisson et à 14 repas végétariens. Si cette option permet de drastiquement diminuer l’impact carbone
                de la production des repas, elle est socialement difficilement acceptée, surtout si elle n’est pas
                transparente auprès des patients et résidents.
                <br/>
                D’un point de vue financier, une étude réalisée par l’Observatoire de la restauration collective bio et
                durable en 2020 aboutit à la conclusion que l’option végétarienne quotidienne est 25 % <span
                style={{fontWeight: "bold"}}>moins chère</span>.
            </p>
            <p>
                <span style={{fontWeight: "bold"}}>Agir sur l’approvisionnement en produits bio</span>: Cette mesure
                représente un coût financier important,
                malgré une obligation légale de 10% depuis la loi EGALIM. Le surcoût lié à l'achat de produits bio
                étant de l'ordre de 30% par rapport à un produit conventionnel, cela implique nécessairement une
                augmentation du prix du repas. D’un point de vue social, il ne faut pas négliger 2 aspects:
                <List sx={{listStyleType: 'disc', marginLeft: 3}}>
                    <ListItem sx={{display: 'list-item'}}>
                        Les repas hospitaliers comprennent généralement 60% de produits texturés, ce que nous mangeons
                        vous et moi, et 40% de textures modifiées. Et pour ces textures modifiées, il n'existe pas de
                        filière bio ou labellisées encore à ce jour.

                    </ListItem>
                    <ListItem sx={{display: 'list-item'}}>
                        L’approvisionnement en produits bio peut s’opposer à l’approvisionnement en produits locaux.
                        Il
                        faut faire une évaluation précise de son environnement d’approvisionnement pour être
                        conscient
                        de l’impact carbone de nos mesures.
                    </ListItem>
                </List>
            </p>
            <Card>
                <CardContent>
                    CHU de Brest : le CHU a instauré un jour de restauration végétarienne par semaine, depuis le jeudi
                    21 septembre 2023. Selon le CHU, la participation à ce programme de réduction du gaspillage, de la
                    consommation de produits locaux et moins de viande permettrait d’économiser 281 tonnes de CO2 en un
                    an.
                </CardContent>

            </Card>


        </>

    );
}
