import HomeNext from "./HomeNext";
import Typography from "@mui/material/Typography";
import * as React from "react";
import {initData} from "../../storage/storage";
import {Grid} from "@mui/material";
import {useSearchParams} from "react-router-dom";

export default function Home() {
    const searchParams = useSearchParams()[0];
    const session  = searchParams.get("session");
    initData(session)
    return (

        <Grid container alignContent={"center"} sx={{textAlign: 'justify'}}>
            <Grid item xs={1} sx={{}}></Grid>
            <Grid item xs={10} sx={{textAlign: 'center', height: '14vh'}}>
                <img style={{height: '10vh'}} src="/arbre.png"
                     alt="Un arbre"/>
                <img style={{height: '14vh'}} src="/hopital.png"
                     alt="Logo d'un hopital"/>
                <img style={{height: '10vh'}} src="/arbre.png"
                     alt="Un arbre"/>
            </Grid>
            <Grid item xs={1} sx={{}}></Grid>
            <Typography variant="h5" component="span" sx={{marginTop: 4}}>
                Bienvenue dans mon hôpital vert !
            </Typography>
            <Typography variant="body1" component="div" >
                {session?
                    <p>
                        <span style={{fontWeight: "bold"}}>Ma session</span> : {session ? session : 'Sans session'}
                    </p>
                : null
                }

                <p>
                    Dans ce jeu, vous êtes le Directeur Général d’un hôpital et vous devez, sur chacune des 10
                    situations proposées, <span style={{fontWeight: "bold"}}>arbitrer entre 3 options</span> qui ont des
                    impacts différenciés sur votre empreinte
                    carbone, ainsi que sur les situations financière et sociale de votre établissement.
                </p>
                <p>
                    Votre objectif est de <span style={{fontWeight:"bold"}}>diminuer l’empreinte carbone</span> de votre hôpital, en prenant en compte <span style={{fontWeight:"bold"}}>l’effet
                    social et financier</span> de vos décisions. Attention, vos ressources financières et « sociales » ne sont
                    pas infinies et vous devez faire attention à ne pas les épuiser pour pouvoir continuer à choisir
                    toutes les options possibles.
                </p>
                <p>
                    Les trois impacts sont représentés par des jauges, que vous pouvez consulter à tout moment en haut de votre écran.
                </p>
                <p>A vos pouces !</p>
            </Typography>
            <div style={{marginBottom: '10vh'}}/>
            <HomeNext/>
        </Grid>
    );
}

