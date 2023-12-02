import {getScoreData, getScoreGraphOptions} from "./ScoreGraph";
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import ForestIcon from '@mui/icons-material/Forest';
import Typography from "@mui/material/Typography";
import {SOLDE_FINANCIER_MAX, SOLDE_SOCIAL_MAX} from "../../../questions";
import {numberWithSpaces} from "../../Solde";
import {SCORE_ENVIRONNEMENTAL_INIT, SOLDE_FINANCIER_INIT, SOLDE_SOCIAL_INIT} from "../../../storage/storage";
import {Grid} from "@mui/material";
import Box from "@mui/material/Box";
import ChartDataLabels from "chartjs-plugin-datalabels";
import {Bar} from "react-chartjs-2";
import {BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip} from "chart.js";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

function avg(array) {
    if (array.length === 0) {
        return 0;
    }
    return array.reduce((prev, curr) => prev + curr) / array.length;
}

export function ScoreCollectif(props) {
    if(!props.display){
        return <></>
    }
    const responses = props.responses
    const soldeFinancierMoyen = avg(responses.map((response) => response["soldeFinancier"]))
    const financierData = getScoreData(["Solde financier"], [soldeFinancierMoyen.toFixed(1)], 'Solde financier moyen', '#00B0FF');
    const financierOptions = getScoreGraphOptions(SOLDE_FINANCIER_MAX, SOLDE_FINANCIER_INIT);

    const soldeSocialMoyen = avg(responses.map((response) => response["soldeSocial"]))
    const socialData = getScoreData(["Solde social"], [soldeSocialMoyen.toFixed(1)], 'Solde social moyen', '#E91E63');
    const socialOptions = getScoreGraphOptions(SOLDE_SOCIAL_MAX, SOLDE_SOCIAL_INIT);
    const scoreEnvironnementalMoyen = avg(responses.map((response) => response["scoreEnvironnemental"]))
    const baisseMoyenneDesEmissions = (SCORE_ENVIRONNEMENTAL_INIT - scoreEnvironnementalMoyen).toFixed(1)
    const emissionsMoyennes = numberWithSpaces(scoreEnvironnementalMoyen.toFixed(0))
    const baisseMoyenneDesEmissionsPourcentage = (100 * baisseMoyenneDesEmissions / SCORE_ENVIRONNEMENTAL_INIT).toFixed(1)
    return <>
        <Grid item xs={5}>
                <Box
                    sx={{
                        bgcolor: 'background.paper',
                        boxShadow: 1,
                        borderRadius: 1,
                        p: 2,
                        height:'18vh'
                    }}
                >
                    <Box sx={{color: 'text.secondary', marginBottom: 2}}> Baisse moyenne des émissions</Box>


                    <Typography variant="span" sx={{color: 'text.primary', fontSize: 80}}>
                        <Box
                            component={TrendingDownIcon}
                            sx={{color: 'success.light', fontSize: 80, verticalAlign: "top"}}
                        />
                        &nbsp;{baisseMoyenneDesEmissionsPourcentage}%
                    </Typography>
                </Box>

        </Grid>
        <Grid item xs={7}>
            <Box
                sx={{
                    bgcolor: 'background.paper',
                    boxShadow: 1,
                    borderRadius: 1,
                    p: 2,
                    height:'18vh'
                }}
            >
                <Box sx={{color: 'text.secondary'}}> Solde financier moyen </Box>
                <Bar height={'50vh'} plugins={[ChartDataLabels]} options={financierOptions} data={financierData}/>
            </Box>
        </Grid>
        <Grid item xs={5} >
            <Box
                sx={{
                    bgcolor: 'background.paper',
                    boxShadow: 1,
                    borderRadius: 1,
                    p: 2,
                    height:'18vh'

                }}
            >
                <Box sx={{color: 'text.secondary', marginBottom: 2}}> Emissions moyennes (à la fin du jeu)</Box>


                <Typography variant="span" sx={{color: 'text.primary', fontSize: 80}}>
                    <Box
                        component={ForestIcon}
                        sx={{color: 'success.light', fontSize: 80, verticalAlign: "top"}}
                    />
                    &nbsp;{emissionsMoyennes}
                </Typography>
                <Typography variant={"body2"} component={"span"} sx={{color: "text.secondary"}}>
                    tCO2
                </Typography>
            </Box>
        </Grid>
        <Grid item xs={7}>
            <Box
                sx={{
                    bgcolor: 'background.paper',
                    boxShadow: 1,
                    borderRadius: 1,
                    p: 2,
                    height:'18vh'

                }}
            >
                <Box sx={{color: 'text.secondary'}}> Solde social moyen </Box>
                <Bar height={'50vh'} plugins={[ChartDataLabels]} options={socialOptions} data={socialData}/>
            </Box>
        </Grid>
    </>;
}