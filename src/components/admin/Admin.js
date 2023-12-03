import * as React from 'react';
import {useState} from 'react';
import Box from "@mui/material/Box";
import {Button, Grid, TextField} from "@mui/material";
import Suivi from "./suivi/Suivi";
import Typography from "@mui/material/Typography";
import {useSearchParams} from "react-router-dom";


export function Admin() {
    const [searchParams, setSearchParams] = useSearchParams();

    const initialSession = searchParams.get("session")??"";
    const [fieldSession, setFieldSession] = useState(initialSession);
    const [session, setSession] = useState(initialSession);

    const validerDisabled = fieldSession === undefined || fieldSession === "";
    const suiviDisabled = session === undefined || session === "";
    const url = "https://hopital-vert.web.app/?session=" + session;
    const href = "/?session=" + session;
    const onValider = () => {
        setSession(fieldSession)
        setSearchParams({"session": fieldSession})
    };
    return <>
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Box
                    sx={{
                        bgcolor: 'background.paper',
                        boxShadow: 1,
                        borderRadius: 1,
                        minHeight: '10vh',
                        p: 2,
                    }}
                >
                    <Box sx={{color: 'text.primary', marginBottom: 1}}>Session de jeu </Box>
                    <Typography sx={{color: 'text.secondary'}} component="p" variant={"body1"}>
                        Veuillez indiquer un nom de session de jeu afin d'obtenir un lien partageable aux
                        participants.
                    </Typography>
                    <Typography sx={{color: 'text.secondary'}} component="p" variant={"body2"}>
                        Sur cette page, vous pourrez suivre en live les réponses des participants une fois la session créée et partagée.
                    </Typography>
                    <br/>
                    <div style={{verticalAlign: "center", marginTop: 4}}>
                        <TextField id="standard-basic" onChange={(event) => setFieldSession(event.target.value)}
                                   label="Nom de session"
                                   value={fieldSession}
                                   variant="standard"/>
                        <Button disabled={validerDisabled} onClick={onValider}>Valider</Button>
                        {session ? <>
                                <br/>
                                <br/>
                                Url de session à partager : <a href={href}>{url}</a>
                            </>

                            : null}
                    </div>
                </Box>
            </Grid>
            {suiviDisabled ? null : <Suivi session={session}/>}
        </Grid>

    </>
}