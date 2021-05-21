import React from "react"
import { Button, AppBar,Toolbar, Typography,IconButton } from '@material-ui/core';




const LogoBig = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu">
                </IconButton>
                <Typography style={{flex: 1}}>
                Custom CMS
                </Typography>
                <Button color="inherit">
                    Create/All Data
                </Button>
            </Toolbar>
            
        </AppBar>
    );
};
export default Header;
