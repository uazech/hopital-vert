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
                        Inès Rahmouni <br/>
                        Clara Brunel <br/>
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
                        Teddy <br/>
                        Lina Arnaud<br/>
                        Aymeric Paquiot<br/>
                        Timothée Vaccaro<br/>
                        Aurélie<br/>
                        Bruno Koubi <br/>
                    </Typography>
                </Grid>
                <Grid item xs={6} lg={2}>
                    <Typography variant={"body1"} component={"div"}>
                        <span style={{fontWeight: "bold"}}>Experts associés :</span>
                        <br/>
                        Baptiste Verneuil <br/>
                        Mathis <br/>
                    </Typography>
                </Grid>
                <Grid item xs={6} lg={2}>
                    <Typography variant={"body1"} component={"div"}>
                        <span style={{fontWeight: "bold"}}>Organisateurs de la journée transition environnementale à l’EHESP :</span>
                        <br/>
                        Carla Fé<br/>
                        Mathilde Moanert<br/>
                        Marie Chevreux <br/>
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant={"body1"} component={"div"}>
                        Avec nos remerciements à Yann Dubois, directeur de la filière directeur d’hôpital à l’EHESP.
                        <br/>
                        <br/>
                    </Typography>
                    <Typography variant={"body1"} component={"div"}>
                        Pour laisser un commentaire, envoyer un mail <a href={`mailto:test@example.com`} >test@example.com</a>

                    </Typography>


                </Grid>


                <Grid item xs={12}>
                    <Typography variant={"body1"} component={"div"}>
                        <span style={{fontWeight: "bold"}}>Licence</span>
                        <br/>
                        Ce projet est diffusé sous licence <a href="https://creativecommons.org/licenses/by-nc/4.0/deed.fr">CC BY-NC</a>
                        <br/>
                        Le code source est disponible sous <a href="https://github.com/uazech/hopital-vert">github</a>
                    </Typography>
                </Grid>
            </Grid>

            <div style={{marginBottom: '10vh'}}/>
            <CreditsNext/>
        </>
    );
}

