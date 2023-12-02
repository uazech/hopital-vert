import * as React from "react";
import {Card, CardContent} from "@mui/material";

export default function Explication3() {
    return (

        <>
            <p>
                Le Shift Project estime les émissions de la catégorie «Déchets» à 0,4 MtCO2e. Les déchets ne pèsent
                pas donc pas aussi lourds que les autres thèmes développés en termes d’impact carbone. Toutefois, ils
                sont un axe important du développement durable et constituent de fait souvent la première action vers la
                transition écologique des équipes de soin. De plus, réduire la quantité de déchets, c'est souvent
                réduire la consommation et donc notamment les émissions "amonts" liées aux achats de produits de santé
                (50% des émissions !) et de produits alimentaires.
                <br/>

            </p>
            <p>
                Les trois propositions faites dans cette question correspondent aux 3R : Réduire, Recycler,
                Réutiliser.
            </p>
            <p>
                <span style={{fontWeight: "bold"}}>Réduire</span> : La réduction de la consommation de petits produits à
                usage unique est une action de sobriété,
                qui a pour conséquence la réduction de la masse des déchets. Cette économie n’entraîne pas d’impact
                social, si elle est bien comprise et accompagnée.
            </p>
            <p>
                <span style={{fontWeight: "bold"}}>Trier / Recycler</span> : La vigilance dans le tri des déchets DAOM
                et DASRI a un impact environnemental plus
                important car, en moyenne, l’incinération d’une tonne de DASRI émet 934 kgCO2e alors que l’impact
                d’une tonne de déchets ménagers en émet près de trois fois moins, de l’ordre de 362 kgCO2e selon
                l’ADEME. Les consignes de tri sont souvent méconnues et/ou peu suivies, notamment en raison d’un manque
                de formation des personnels. Ainsi, partent dans le flux des DASRI beaucoup de déchets qui ne sont pas
                à risque infectieux. Le coût de traitement des DASRI, supérieur à celui des autres déchets,
                augmente le budget consacré au traitement des déchets et le bilan carbone du traitement. Mieux trier
                permet donc de réduire les dépenses, de valoriser les DAOM et permettre leur recyclage. La formation est
                appréciée par les professionnels, son impact social est positif.
            </p>
            <p>
                <span style={{fontWeight: "bold"}}>Réutiliser</span> : La possibilité de retraiter des dispositifs
                médicaux est un axe de réduction des déchets,
                qui permet également d’alléger le budget de l’établissement, car le coût d’un dispositif médical à usage
                unique (DMUU) est 60 % plus cher que celui d’un DMUU retraité. L’internalisation d’une fonction de
                stérilisation peut être une opportunité pour réduire ces déchets, mais l’impact environnemental de la
                stérilisation, en termes de consommation d’eau et d’énergie n’est pas forcément un choix plus
                respectueux de l’environnement. La conduite du changement nécessaire pour s’adapter à une éventuelle
                stérilisation a un impact social négatif.
            </p>
            <Card>
                <CardContent>
                    Exemple de réutilisation de recyclage des déchets : Avec ses 300 tonnes de DASRI annuels, l’hôpital
                    Foch a décidé d’incinérer in situ ses propres DASRI pour les transformer en DAOM. Évitant ainsi les
                    norias de transports en camion vers les usines d’incinération, les déchets sont transformés sur
                    place. Ce type de machine broie les déchets et les incinère après exposition à une forte vapeur
                    d’eau.
                </CardContent>
            </Card>
        </>

    );
}
