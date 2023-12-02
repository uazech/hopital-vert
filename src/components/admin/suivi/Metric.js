import Box from "@mui/material/Box";
import {Grid} from "@mui/material";
import * as React from "react";

export function Metric(props) {
    return <Grid item xs={props.width}>
        <Box
            sx={{
                bgcolor: 'background.paper',
                boxShadow: 1,
                borderRadius: 1,
                height: '7vh',
                p: 2,
            }}
        >
            <Box sx={{color: 'text.secondary'}}>{props.title} </Box>
            <Box sx={{color: 'text.primary', fontSize: 34, fontWeight: 'medium'}}>
                {props.value}
            </Box>
        </Box>
    </Grid>
}