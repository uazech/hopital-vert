import Typography from "@mui/material/Typography";
import * as React from "react";
import CreditsNext from "./CreditsNext";
import {Grid} from "@mui/material";

export default function Credits() {
    return (
        <>
            <Typography variant={"h5"} component={"span"} sx={{marginBottom: 4}}>
                Crédits et remerciements
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={6} lg={2}>
                    <Typography variant={"body1"} component={"div"}>
                        <span style={{fontWeight: "bold"}}>Responsables du projet</span>
                        <br/>
                        Clara Brunel <br/>
                        Inès Rahmouni <br/>
                    </Typography>
                </Grid>
                <Grid item xs={6} lg={2}>
                    <Typography variant={"body1"} component={"div"}>
                        <span style={{fontWeight: "bold"}}>Développeur du jeu :</span>
                        <br/>
                        Baptiste Chezaubernard <br/>
                    </Typography>
                </Grid>
                <Grid item xs={6} lg={2}>
                    <Typography variant={"body1"} component={"div"}>
                        <span style={{fontWeight: "bold"}}>Equipe projet :</span>
                        <br/>
                        Aurélie le Tarnec <br/>
                        Aymeric Paquiot<br/>
                        Bruno Koubi <br/>
                        Lina Arnaud<br/>
                        Teddy Lutringer <br/>
                        Timothée Vaccaro<br/>
                    </Typography>
                </Grid>
                <Grid item xs={6} lg={2}>
                    <Typography variant={"body1"} component={"div"}>
                        <span style={{fontWeight: "bold"}}>Experts associés :</span>
                        <br/>
                        Baptiste Verneuil <br/>
                        Mathis Egnell<br/>
                    </Typography>
                </Grid>
                <Grid item xs={6} lg={2}>
                    <Typography variant={"body1"} component={"div"}>
                        <span style={{fontWeight: "bold"}}>Organisateurs de la journée transition environnementale à l’EHESP :</span>
                        <br/>
                        Carla Fé<br/>
                        Marie Chevreux <br/>
                        Mathilde Moanert<br/>
                        Timothée Vaccaro <br/>
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant={"body1"} component={"div"}>
                        Avec nos remerciements à Yann Dubois, directeur de la filière directeur d’hôpital à l’EHESP.
                        <br/>
                        <br/>
                    </Typography>
                    <Typography variant={"body1"} component={"div"}>
                        Pour laisser un commentaire, envoyer un mail <a href={`mailto:hopital-vert@googlegroups.com`} >hopital-vert@googlegroups.com</a>
                    </Typography>


                </Grid>


                <Grid item xs={12}>
                    <Typography variant={"body1"} component={"div"}>
                        <span style={{fontWeight: "bold"}}>Licence</span>
                        <br/>
                        Ce projet est diffusé sous licence <a href="https://creativecommons.org/licenses/by-nc/4.0/deed.fr">CC BY-NC</a>.
                        <br/>
                        Le code source est disponible sous <a href="https://github.com/uazech/hopital-vert">github</a>.
                    </Typography>
                </Grid>
            </Grid>

            <div style={{marginBottom: '10vh'}}/>
            <CreditsNext/>
        </>
    );
}

