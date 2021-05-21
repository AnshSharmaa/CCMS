import React from "react"
import { Box , Paper, Card, Grid, CardContent, Container, Typography, Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { pink } from "@material-ui/core/colors";
import imagelink from '../Images/main.png';
import logo from '../Images/Logo.png'

const useStyles = makeStyles({
    container : {
        margin: "auto",
    },
    MainDiv : {
        //backgroundImage: 'url('+imagelink+')',
        backgroundColor: pink[100],
    },
    LOGO : {
    },
    HiText : {
        color: "white"
    },
    feat : {
        width: "100%",
        marginTop: "20px",
        marginBottom: "20px"
    },
    card : {
        height: "200px",
        minWidth: "200px",
    },
    started : {
        backgroundColor: pink[100],
        height: "200px",
        marginTop: "20px",
        marginBottom: "20px"
    }
  });

const Main = () => {
    const classes = useStyles();
    return (
        <Paper className={classes.container}>
            <Grid
                container
                direction="row"
                justify="space-around"
                alignItems="center"
                className={classes.MainDiv}
                >
                <Grid item className={classes.LOGO}>
                        <img src={logo}>
                        </img>
                </Grid>
                <Typography variant="h4" className={classes.HiText}>
                    Hi, Welcome to Custom CCMS
                </Typography>
            </Grid>
            <Box component="div" className={classes.feat}>
                <Typography align="center" variant="h5">Features</Typography>
            </Box>
            <Container >
                <Grid 
                    container
                    direction="row"
                    justify="space-around"
                    alignItems="stretch"
                    
                >
                    <Grid item >
                        <Card className={classes.card}>
                            <CardContent>
                                <Typography>Create</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item >
                        <Card className={classes.card}>
                            <CardContent>
                                <Typography>Update</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item >
                        <Card className={classes.card}>
                            <CardContent>
                                <Typography>Delete</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item >
                        <Card className={classes.card}>
                            <CardContent>
                                <Typography>2 Types of Entities</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
            <Box component="div" className={classes.started}>
                <Typography align="center" variant="h5">Getting Started</Typography>
                <Button>
                    Login
                </Button>
                <Button>
                    Signup
                </Button>
            </Box>
        </Paper>
        
        
    );
};
export default Main;
