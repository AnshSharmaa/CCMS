import React from "react"
import { Button, AppBar,Toolbar, Typography,IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    siteName : {
        flex: 1,
    }
  });

const Header = () => {
    const classes = useStyles();
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu">
                </IconButton>
                <Typography className={classes.siteName}>
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
