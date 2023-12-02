import Typography from "@mui/material/Typography";
import * as React from "react";
import FinNext from "./FinNext";
import {Grid} from "@mui/material";
import {getScoreEnvironnemental, SCORE_ENVIRONNEMENTAL_INIT} from "../../storage/storage";
import {SoldeFinancierEtSocial} from "../Solde";

export default function Fin() {
    let scoreEnvironnemental = getScoreEnvironnemental();
    const pourcentageDeBaisse = ((SCORE_ENVIRONNEMENTAL_INIT - scoreEnvironnemental) / SCORE_ENVIRONNEMENTAL_INIT * 100).toFixed(2)
    return (
        <>
            <Typography variant={"h5"} component={"span"} sx={{marginBottom: 4}}>
                Félicitations !
            </Typography>
            <Grid container sx={{textAlign: "left"}}>

                <Grid item xs={8} lg={4}>
                    <Typography variant="body1" component="span" sx={{lineHeight: 2}}>
                        Vous êtes parvenus à faire réduire les émissions carbone de votre établissement de :
                    </Typography>
                </Grid>
                <Grid item xs={4} alignItems={"center"} alignContent={"center"}>
                    <div style={{
                        width: "120px",
                        height: "120px",
                        lineHeight: "120px",
                        borderRadius: "50%",
                        fontSize: "50px",
                        color: "#fff",
                        textAlign: "center",
                        background: "#4CAF50"
                    }}>

                        <Typography variant="h4" component="span">
                            {pourcentageDeBaisse}%
                        </Typography>
                    </div>

                </Grid>
            </Grid>
            <Typography variant="body1" component="p" sx={{marginY: 2}}>
                Vos jauges financières et sociales finales décrivent la situation de votre établissement à l’issue des
                choix que vous avez fait.
            </Typography>
            <SoldeFinancierEtSocial/>
            <br/>
            <br/>
            <br/>
            <Typography variant="h5" component="span" sx={{marginTop: 2}}>
                Merci pour votre participation !
            </Typography>
            <Typography variant="body1" component="div" >
                <p>
                    Vous pouvez comparer vos résultats individuels au résultat global du groupe projeté à l’écran de
                    l’amphithéâtre.
                </p>
                <p>
                    Si vous souhaitez en savoir plus sur l’impact de la santé sur l’environnement nous vous conseillons
                    le rapport “Décarboner la santé” du Shift Project.
                </p>
            </Typography>
            <div style={{marginBottom: '10vh'}}/>
            <FinNext/>
        </>
    );
}

