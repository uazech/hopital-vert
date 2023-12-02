import {createTheme, ThemeProvider} from "@mui/material";
import {withStyles} from "@mui/styles";

import Header from "./Header";
import {RouterProvider} from "react-router-dom";
import {router} from "../router";
import React from "react";
import {green, lightBlue} from "@mui/material/colors";

const theme = createTheme({
    palette: {
        primary: green,
        secondary: lightBlue,
    }
});

const styles = theme => ({
    // Load app bar information from the theme
    toolbar: theme.mixins,
});
const  App = ()=> {
    return <ThemeProvider theme={theme}>
        <Header/>
        <div style={{
            padding: 10,
            backgroundColor: '#F0FFF0',
            display: "flex",
            minHeight: '90vh',
            flexFlow: 'column'
        }}>
            <div className={"toolbar"} />

            <RouterProvider router={router}>
            </RouterProvider>
        </div>

    </ThemeProvider>
}
export default withStyles(styles)(App);
