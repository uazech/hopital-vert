import BilanNext from "./BilanNext";
import Typography from "@mui/material/Typography";
import * as React from "react";
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";

export default function Bilan() {
    const data = [
        {
            "poste": "Sources fixes et mobiles de combustion",
            "emission": "4 263"
        },
        {
            "poste": "Consommation de gaz médicaux et climatisation",
            "emission": "955"
        },
        {
            "poste": "Electricité, froid, chaleur",
            "emission": "761"
        },
        {
            "poste": "Alimentation",
            "emission": "3 106"
        },
        {
            "poste": "Transport des usagers et visiteurs",
            "emission": "1 234"
        },
        {
            "poste": "Immobilisations",
            "emission": "4 510"
        },
        {
            "poste": "Trajets domicile-travail et déplacements pro",
            "emission": "1 601"
        },
        {
            "poste": "Services et linge",
            "emission": "2 679"
        },
        {
            "poste": "Déchets",
            "emission": "261"
        },
        {
            "poste": "Achats de médicaments",
            "emission": "6 383"
        },
        {
            "poste": "Achats de dispositifs médicaux",
            "emission": "5 319"
        },
    ]
    return (
        <>
            <Typography variant="h5" component="div" sx={{marginBottom:4}}>
                Votre bilan carbone :
            </Typography>
            <TableContainer component={Paper}>
                <Table aria-label="Impact environmental des réponses">
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{fontWeight: 'bold'}}>Nom du poste</TableCell>
                            <TableCell sx={{fontWeight: 'bold'}} align="right">Emissions en tonnes</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map(ligne => (
                            <TableRow key={ligne["poste"]} sx={{'&:last-child td, &:last-child th': {border: 0}}}>
                                <TableCell>{ligne["poste"]}</TableCell>
                                <TableCell align="right">{ligne["emission"]}</TableCell>
                            </TableRow>
                        ))}
                        <TableRow  sx={{'&:last-child td, &:last-child th': {border: 0}}}>
                            <TableCell sx={{fontWeight: 'bold'}}>Total</TableCell>
                            <TableCell sx={{fontWeight: 'bold'}} align="right">31 074</TableCell>
                        </TableRow>

                    </TableBody>
                </Table>
            </TableContainer>

            <div style={{marginBottom: '8vh'}}/>
            <BilanNext/>
        </>
    );
}

