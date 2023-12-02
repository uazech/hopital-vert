import Question1 from "./components/question/questions/Question1";
import * as React from "react";
import Explication1 from "./components/explication/explications/Explication1";
import Question2 from "./components/question/questions/Question2";
import Explication2 from "./components/explication/explications/Explication2";
import Question3 from "./components/question/questions/Question3";
import Explication3 from "./components/explication/explications/Explication3";
import Question4 from "./components/question/questions/Question4";
import Explication4 from "./components/explication/explications/Explication4";
import Question5 from "./components/question/questions/Question5";
import Explication5 from "./components/explication/explications/Explication5";
import Question6 from "./components/question/questions/Question6";
import Explication6 from "./components/explication/explications/Explication6";
import Question7 from "./components/question/questions/Question7";
import Explication7 from "./components/explication/explications/Explication7";
import Question8 from "./components/question/questions/Question8";
import Explication8 from "./components/explication/explications/Explication8";
import Question9 from "./components/question/questions/Question9";
import Explication9 from "./components/explication/explications/Explication9";
import Question10 from "./components/question/questions/Question10";
import Explication10 from "./components/explication/explications/Explication10";

export const MAX_ENV_SCORE = 32000;
export const SOLDE_FINANCIER_MAX = 300;
export const SOLDE_SOCIAL_MAX = 30;


export const questions = [
    {
        titre: "Situation 1: Energie",
        question: <Question1/>,
        explication: <Explication1/>,
        reponses: [
            {
                label: "Limiter le chauffage à 19°C dans les locaux administratifs et à 22°C dans les chambres.",
                impact_environnemental: -400,
                impact_financier: -5,
                impact_social: -3
            },
            {
                label: "Se raccorder au réseau de chauffage urbain de votre commune. Un réseau de chauffage urbain est un système de distribution de chaleur produit de façon centralisée pouvant desservir les usagers (bâtiments publics, logements résidentiels collectifs ou encore de bâtiments à usage tertiaire).",
                impact_environnemental: -2400,
                impact_financier: -23,
                impact_social: 0
            },
            {
                label: "Procéder à l’isolation thermique des bâtiments les plus anciens.",
                impact_environnemental: -2400,
                impact_financier: -10,
                impact_social: 0
            }
        ],
    },
    {
        titre: "Situation 2: Restauration",
        question: <Question2/>,
        explication: <Explication2/>,
        reponses: [
            {
                label: " Poursuite des efforts pour réduire le gaspillage alimentaire et l’emballage des produits utilisés. Cette mesure prend du temps mais montre déjà des résultats avec la mise en place de l’unité de production centralisée.",
                impact_environnemental: -300,
                impact_financier: 0,
                impact_social: 0
            },
            {
                label: "50% des repas deviennent végétariens (mais sans l'indication \"végétarien\" : par exemple risotto aux champignons et non risotto végétarien).",
                impact_environnemental: -1400,
                impact_financier: 1,
                impact_social: -3
            },
            {
                label: "Développement de partenariats avec des producteurs bio locaux. Ce choix implique une hausse de 30% du prix du repas, et de rompre certains contrats avec des fournisseurs locaux.",
                impact_environnemental: 0,
                impact_financier: -1,
                impact_social: 1
            }
        ],
    },
    {
        titre: "Situation 3: Déchets",
        question: <Question3/>,
        explication: <Explication3/>,
        reponses: [
            {
                label: "Réduire la taille des kits pour inciter à la juste utilisation des produits et favoriser l'usage de \"kits sur mesure\".",
                impact_environnemental: -0.5,
                impact_financier: 0,
                impact_social: 0
            },
            {
                label: "Former les professionnels de santé au tri, en précisant l’impact de chaque produit, pour induire un tri DASRI/DAOM plus fin.",
                impact_environnemental: -15,
                impact_financier: 1,
                impact_social: 1
            },
            {
                label: "Encourager l'utilisation de dispositifs médicaux réutilisables et/ou le retraitement de dispositifs médicaux à usage unique.",
                impact_environnemental: -500,
                impact_financier: 3,
                impact_social: 2
            }
        ],
    },
    {
        titre: "Situation 4: Achats",
        question: <Question4/>,
        explication: <Explication4/>,
        reponses: [
            {
                label: "Ne rien faire et se conformer à l’obligation lors de son entrée en vigueur le 22 août 2026 (Loi Climat et Résilience). Vous êtes conscient que les fournisseurs ne sont pas encore en adéquation avec ces exigences. Choisir cette option leur laissera ainsi le temps de proposer des services et produits conformes, et à au service de se préparer aux nouveaux contrats de la commande publique.",
                impact_environnemental: 0,
                impact_financier: 0,
                impact_social: -3
            },
            {
                label: "A minima, vous décidez de mettre en place sur 2 ans des formations bi-annuelles de sensibilisation environnementale pour les services achats du GHT, avec des focus sur l'optimisation du contenu, la provenance, les matières utilisées, les emballages, les modalités de livraison, etc. Toutefois, le budget formation du service étant déjà entièrement fléché, cela implique de ne pas participer pendant ces 2 ans au congrès des acheteurs hospitaliers.",
                impact_environnemental: -220,
                impact_financier: 0,
                impact_social: 1
            },
            {
                label: "Vous actez la mise en place de critères environnementaux dans les appels d'offres pour les différents achats : dispositifs médicaux, médicaments, alimentation, etc. Attention, cette mesure va amener à rompre certains contrats locaux de fournisseurs qui n’ont pas eu le temps d’évaluer l’empreinte carbone de leurs produits. Des ruptures dans l’approvisionnement de certains dispositifs médicaux et non médicaux sont à envisager sur le court et moyen termes.",
                impact_environnemental: -310,
                impact_financier: -50,
                impact_social: -3
            }
        ],
    },
    {
        titre: "Situation 5: DM / Médicaments",
        question: <Question5/>,
        explication: <Explication5/>,
        reponses: [
            {
                label: "Vous lui expliquez que vous n’avez pas de leviers d’action.",
                impact_environnemental: 0,
                impact_financier: 0,
                impact_social: 0
            },
            {
                label: "Les critères environnementaux récoltés auprès des fournisseurs seront dorénavant affichés à l’arsenal du bloc dans l’objectif d’être pris en compte au moment de la préparation des paniers d’intervention.",
                impact_environnemental: -10,
                impact_financier: 0,
                impact_social: 0
            },
            {
                label: "En lien avec la CME, on instaure des protocoles standardisés au bloc, optimisés pour l'impact carbone sans dégradation de la qualité des soins. Ils seront basés sur une analyse comparative des chirurgiens de différentes spécialités. Cela pourra permettre la réduction de la consommation de DM et médicaments, une réflexion sur le choix du re-stérilisable vs. usage unique, sur le choix du DMs à partir de critères environnementaux (origines…).",
                impact_environnemental: -150,
                impact_financier: 32,
                impact_social: -3
            }
        ],
    },
    {
        titre: "Situation 6: Transports",
        question: <Question6/>,
        explication: <Explication6/>,
        reponses: [
            {
                label: "Vous choisissez de conduire un renouvellement standard de la flotte, c’est-à-dire remplacer chaque véhicule thermique arrivé en fin de vie par un nouveau véhicule thermique, avec certes en général une performance environnementale légèrement améliorée (véhicules plus récents).",
                impact_environnemental: -60,
                impact_financier: -2,
                impact_social: 1
            },
            {
                label: "Vous choisissez de mener un renouvellement de la flotte par des véhicules électriques, c’est-à-dire remplacer chaque véhicule thermique arrivé en fin de vie par un véhicule électrique.",
                impact_environnemental: -160,
                impact_financier: -3,
                impact_social: 2
            },
            {
                label: "Vous anticipez le changement de toute la flotte en véhicule électrique, même si les véhicules ne sont pas en fin de vie.",
                impact_environnemental: -400,
                impact_financier: -8,
                impact_social: 2
            }
        ],
    },
    {
        titre: "Situation 7: Energie",
        question: <Question7/>,
        explication: <Explication7/>,
        reponses: [
            {
                label: "Vous l’informez de votre choix de ne pas mettre en conformité vos parkings, par manque de moyens financiers.",
                impact_environnemental: 0,
                impact_financier: 0,
                impact_social: -3
            },
            {
                label: "Vous la remerciez de ce rappel et lui confirmez que cette obligation légale sera respectée, via un plan d’investissement sur 3 ans.",
                impact_environnemental: -280,
                impact_financier: -48,
                impact_social: 1
            },
            {
                label: "Vous exprimez votre volonté d’aller au-delà de l'obligation légale en installant des panneaux sur l’ensemble des toits de l’hôpital, via un plan d’investissement deux fois plus onéreux que la mise en conformité. Toutefois, à terme ces installations vous permettent d’économiser sur vos factures d’énergie.",
                impact_environnemental: -600,
                impact_financier: -96,
                impact_social: 2
            }
        ],
    },
    {
        titre: "Situation 8: Numérique",
        question: <Question8/>,
        explication: <Explication8/>,
        reponses: [
            {
                label: "Vous prorogez le contrat.",
                impact_environnemental: 0,
                impact_financier: 2,
                impact_social: 1
            },
            {
                label: "Vous prorogez le contrat mais vous supprimez les imprimantes individuelles.",
                impact_environnemental: -1,
                impact_financier: -1,
                impact_social: 0
            },
            {
                label: "Vous lancez un nouvel appel d’offre pour un DPI permettant la suppression totale du papier, remplacé par des tablettes individuelles pour les professionnels et des applications pour les patients. Les données seront hébergées sur un cloud certifié HDS.",
                impact_environnemental: 0,
                impact_financier: -50,
                impact_social: -3
            }
        ],
    },
    {
        titre: "Situation 9: Parcours de soins",
        question: <Question9/>,
        explication: <Explication9/>,
        reponses: [
            {
                label: "Vous ne faites rien face à cette situation.",
                impact_environnemental: 0,
                impact_financier: 2,
                impact_social: -1
            },
            {
                label: "Vous réunissez les équipes du service de chirurgie pour établir un protocole de prise charge mieux adapté à cette pathologie qui conduit à ne plus recourir à la chirurgie pour la tendinopathie non rompue de l'épaule au sein de l’établissement.",
                impact_environnemental: -1,
                impact_financier: 0,
                impact_social: -2
            },
            {
                label: "Malgré les fortes réticences exprimées par les équipes médicales, vous mettez en place des référents \"juste soins\" dans chaque service afin de diffuser de manière plus généralisée les bonnes pratiques et les recommandations en matière de prise en charge.",
                impact_environnemental: -600,
                impact_financier: 0,
                impact_social: -3
            }
        ],
    },
    {
        titre: "Situation 10: Hémodialyse",
        question: <Question10/>,
        explication: <Explication10/>,
        reponses: [
            {
                label: "Vous construisez un centre d’hémodialyse conventionnel.",
                impact_environnemental: 630,
                impact_financier: 10,
                impact_social: 3
            },
            {
                label: "Vous ne répondez pas aux sollicitations de l’ARS et ne déposez pas de demande d’autorisation.",
                impact_environnemental: 0,
                impact_financier: 0,
                impact_social: -5
            },
            {
                label: "Vous construisez un centre de dialyse « passif » se voulant le plus vertueux possible tant sur le bâti que sur l’activité de dialyse en elle-même.",
                impact_environnemental: 350,
                impact_financier: 5,
                impact_social: 3
            }
        ],
    },
];
