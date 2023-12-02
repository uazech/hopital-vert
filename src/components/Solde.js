import Box from "@mui/material/Box";
import {Grid, LinearProgress} from "@mui/material";
import Typography from "@mui/material/Typography";
import {
    getImpactFinancier,
    getImpactSocial,
    getScoreEnvironnemental,
    getSoldeFinancier,
    getSoldeSocial
} from "../storage/storage";
import * as React from "react";
import {MAX_ENV_SCORE, SOLDE_FINANCIER_MAX, SOLDE_SOCIAL_MAX} from "../questions";


export function numberWithSpaces(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

function LinearProgressWithLabel(props) {
    const value = ((props.currentValue - props.min) * 100) / (props.max - props.min);
    let cout = props.cout
    let currentValueFormatted = numberWithSpaces(Math.round(
        props.currentValue,
    ));
    let maxFormatted = numberWithSpaces(props.max);
    const displayCout = cout !== undefined && cout !== null;
    if(displayCout && cout>=0){
        cout= "+"+cout;
    }
    const displayedCout = displayCout ? `(${cout})`: null;
    return (
        <Box sx={{display: 'flex', alignItems: 'center'}}>
            <Box sx={{width: '100%', mr: 2}}>
                <LinearProgress aria-hidden={true} variant="determinate" value={value} sx={{
                    backgroundColor: props.secondaryColor,
                    '& .MuiLinearProgress-bar': {
                        backgroundColor: props.primaryColor
                    }
                }}
                />
            </Box>
            <Box sx={{minWidth: 150}}>
                <Typography variant="body2" color="text.secondary">{`${currentValueFormatted} / ` + maxFormatted} {displayedCout}</Typography>
            </Box>
        </Box>
    );
}


export function Solde(props) {
    const displayCout = props.displayCout;

    const scoreEnvironnemental = getScoreEnvironnemental();
    return (
        <>
            <Grid item xs={5} md={2} lg={1}>
                <Typography variant="body2" component="span" >
                    Score environnemental (en tonnes de CO2).
                </Typography>
            </Grid>
            <Grid item xs={7} md={10} lg={11} alignContent={"left"}>
                <LinearProgressWithLabel primaryColor="#4CAF50" secondaryColor="#bae0bc"
                                         currentValue={scoreEnvironnemental} min={24000} max={MAX_ENV_SCORE}/>
            </Grid>
            <SoldeFinancierEtSocial displayCout={displayCout}/>
        </>
    );
}

export function SoldeFinancierEtSocial(props){
    const soldeFinancier = getSoldeFinancier();
    const soldeSocial = getSoldeSocial();
    const coutFinancier = props.displayCout ? getImpactFinancier() : null;
    const coutSocial = props.displayCout ? getImpactSocial() : null;
    return <>
        <Grid item xs={5} md={2} lg={1}>
            <Typography variant="body2" component="span" >
                Solde financier
            </Typography>
        </Grid>
        <Grid item xs={7} md={10} lg={11} alignContent={"left"}>
            <LinearProgressWithLabel primaryColor="#00B0FF" secondaryColor="#9ee0ff" cout={coutFinancier}
                                     currentValue={soldeFinancier} min={0} max={SOLDE_FINANCIER_MAX}/>
        </Grid>
        <Grid item xs={5} md={2} lg={1}>
            <Typography variant="body2" component="span" >
                Solde social
            </Typography>
        </Grid>
        <Grid item xs={7} md={10} lg={11} alignContent={"left"}>
            <LinearProgressWithLabel primaryColor="#E91E63" secondaryColor="#F6A9C3" cout={coutSocial}
                                     currentValue={soldeSocial} min={0} max={SOLDE_SOCIAL_MAX}/>
        </Grid>
    </>
}
