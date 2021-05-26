import React from "react"
import { Button, AppBar,Toolbar, Typography,IconButton, Paper, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Create from './Create';


const useStyles = makeStyles({
    

  });

const Datapage = () => {
    const classes = useStyles();
    return (
        <Paper style={{maxWidth:'1600px',margin:'auto'}}>
            <Grid >
                <Create/>
            </Grid>
        </Paper>
    );
};
export default Datapage;
