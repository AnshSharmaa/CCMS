import React from "react"
import { Button, AppBar,Toolbar, Typography,IconButton, Paper, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Create from './Create';
import Post from './Post'
import Profile from './Profile'

const useStyles = makeStyles({
    cardPost: {
        padding: "10px"
    },
    cardProfile: {
        padding: "10px"
    }

  });

const Datapage = () => {
    const classes = useStyles();
    return (
        <Paper style={{maxWidth:'1800px',margin:'auto'}}>
            <Grid>
                <Create/>
            </Grid>
            <Paper>

                <Grid 
                container
                direction="row"
                justify="center"
                >
                    <Grid container style={{maxWidth:'1000px'}}>
                        <Grid item className={classes.cardPost}><Post/></Grid>
                        <Grid item className={classes.cardPost}><Post/></Grid>
                        <Grid item className={classes.cardPost}><Post/></Grid>
                        <Grid item className={classes.cardPost}><Post/></Grid>
                    </Grid>
                    <Grid container style={{maxWidth:'700px'}}>
                        <Grid item className={classes.cardProfile}><Profile/></Grid>
                    </Grid>
                </Grid>
                
            </Paper>
        </Paper>
    );
};
export default Datapage;
