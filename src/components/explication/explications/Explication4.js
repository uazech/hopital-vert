import * as React from "react";
import {List, ListItem} from "@mui/material";

export default function Explication4() {
    return (

        <>
            <p>
                La <span style={{fontWeight: "bold"}}>loi industrie verte du 23 octobre 2023</span> crée deux nouveaux
                motifs d'exclusion des marchés publics :

                <List sx={{listStyleType: 'disc', marginLeft: 3}}>
                    <ListItem sx={{display: 'list-item'}}>
                        le premier pour les entreprises ne satisfaisant pas à l'obligation d'établir un bilan de
                        leurs émissions de gaz à effet de serre (BEGES) ;
                    </ListItem>
                    <ListItem sx={{display: 'list-item'}}>
                        le second pour les entreprises ne respectant pas leurs engagements de publication
                        d'information en matière de durabilité.
                    </ListItem>
                </List>
            </p>
            <p>
                A ce jour - en attendant l’entrée en vigueur de l’obligation de la loi Climat et résilience - la loi
                dispose qu’une offre économiquement la plus avantageuse s’apprécie aussi au regard d’une pluralité de
                critères parmi lesquels figure le prix et un ou plusieurs autres critères comprenant des aspects
                qualitatifs, environnementaux ou sociaux.
            </p>
            <p>
                Sans attendre 2026, toutefois, <span style={{fontWeight: "bold"}}>la loi Industrie verte</span> a
                consacré la prise en compte obligatoire de
                critères environnementaux dans les marchés publics pour des produits clés de la décarbonation (voitures
                électriques, pompes à chaleur…) dès juillet 2024.

            </p>
            <p>
                <span style={{fontWeight: "bold"}}>Ne pas modifier ses pratiques en matière d’achats dans le sens d’une meilleure prise en compte des
                    enjeux environnementaux</span>. Le rapport “Décarboner la santé pour soigner durablement” (2023) du
                Shift
                Project estime les émissions de la catégorie “Achats” à environ 32 MtCO2e, soit plus de 65% des
                émissions du secteur. Face à l'urgence de réduction des GES, ne pas s’inscrire dans une stratégie
                assumée de réduction de ce poste traduit plus globalement un manque d’ambition en matière
                environnementale. Cela porterait atteinte à l’image de votre établissement et certains de vos agents
                pourraient ne plus être en phase avec les objectifs en matière de développement durable. De potentiels
                impacts négatifs en matière d’attractivité et de fidélisation sont donc à envisager.
            </p>
            <p>
                <span style={{fontWeight: "bold"}}>Mettre en place des formations de sensibilisation à l’environnement à l’attention des agents du service
                    achats</span>. La mise en place de deux formations par an pour former l’ensemble des agents de la
                fonction
                achat du GHT est une solution intermédiaire destinée à préparer la mise en conformité à l’obligation qui
                entrera en vigueur en 2026. Il est difficile de chiffrer l’impact en matière de réduction des émissions
                de GES mais les formations pourront contribuer aux réductions des émissions liées aux achats très
                significativement sur le long terme. Les responsables achats pourront chercher notamment à préparer
                leurs fournisseurs à l’implémentation de critères environnementaux, et chercher également à réduire dès
                à présent certains achats inutiles.
            </p>
            <p>
                <span style={{fontWeight:"bold"}}>Mettre en place des critères environnementaux dans les appels d'offres pour les différents achats :
                    dispositifs médicaux, médicaments, alimentation, etc</span>. Ce choix peut avoir des résultats significatifs
                sur certains produits, notamment les dispositifs médicaux. Toutefois, une telle mesure aurait pour
                l’instant moins d’impact sur les médicaments, car les fournisseurs sont très réticents au partage
                d’informations. L’établissement peut s’attendre à avoir moins de choix de fournisseurs, ce qui pourrait
                être à l’origine de ruptures sur certains produits, et susciter le mécontentement de certains agents.
                Cela peut aussi provoquer des cas dans lesquels le critère environnemental prend le pas sur le critère
                du local (circuits courts) si les fournisseurs à proximité de l’établissement n’ont pas encore développé
                de produits conformes.
                <br/>
                Enfin, cette option serait plus coûteuse pour l’établissement.
            </p>


        </>

    );
}
