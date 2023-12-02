import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {Button, Drawer} from "@mui/material";
import {Solde} from "./Solde";


export default function Header() {
    const [isOpened, setIsOpened] = React.useState(false);
    const toggleDrawer = () => (event) => {
        setIsOpened(!isOpened)
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
    }
    let anchor = "top";
    return (
        <div style={{marginBottom: '7vh'}}>

            <AppBar position="fixed" sx={{height: '7vh'}}>
                <Toolbar>
                    <Typography variant="h6" component="span" sx={{flexGrow: 1, color: 'white'}}>
                        Hôpital vert
                    </Typography>
                    <Button sx={{color: 'white', textDecoration: 'underline'}} onClick={toggleDrawer(true)}>Mon
                        solde</Button>

                </Toolbar>
            </AppBar>
            <React.Fragment>
                <Drawer
                    anchor={anchor}
                    open={isOpened}
                    onClose={toggleDrawer()}
                    sx={{}}
                >
                    <Typography variant="h5" component="span" sx={{marginBottom: 1}}>
                        Mon solde
                    </Typography>
                    <div>
                        <Solde/>
                    </div>

                    <Button onClick={() => setIsOpened(false)}> Fermer </Button>

                </Drawer>
            </React.Fragment>
        </div>
    );
}

