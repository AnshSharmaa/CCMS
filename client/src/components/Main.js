import React from "react"
import { Box , Card, Grid, CardContent, Container, Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { pink } from "@material-ui/core/colors";
import image from '../Images/main.png';

const useStyles = makeStyles({
    container : {
        margin: "auto",
    },
    MainDiv : {
        backgroundImage: 'url(${"image})',
        height: "500px",
        backgroundColor: pink[100],
        backgroundPosition: 'center', 
        backgroundSize: 'cover', 
        backgroundRepeat: 'no-repeat',
    },
    LOGO : {
        flex: 1,
    },
    feat : {
        width: "100%"
    },
    card : {
        flex: 1,
    },
    started : {
        backgroundColor: pink[100],
        height: "200px",
    }
  });

const Main = () => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <Box component="div" className={classes.MainDiv} justifyContent="space-in-between">
                <Box className={classes.LOGO}>
                    LOGO
                </Box>
                <Typography color="inherit">
                    Hi, Welcome to Custom CCMS
                </Typography>
            </Box>
            <Box component="div" className={classes.feat}>
                <Typography align="center" variant="h5">Features</Typography>
            </Box>
            <Container className={classes.card}>
                <Grid container>
                    <Grid item sm={3}>
                    <Card width={1/4}>
                        <CardContent>
                            <Typography>
                                Create
                            </Typography>
                        </CardContent>
                    </Card>
                    </Grid>
                    <Grid item sm={3}>
                    <Card width={1/4}>
                        <CardContent>
                            <Typography>
                                Update
                            </Typography>
                        </CardContent>
                    </Card>
                    </Grid>
                    <Grid item sm={3}>
                    <Card width={1/4} className={classes.card}>
                        <CardContent>
                            <Typography>
                                Delete
                            </Typography>
                        </CardContent>
                    </Card>
                    </Grid>
                    <Grid item sm={3}>
                    <Card width={1/4} className={classes.card}>
                        <CardContent>
                            <Typography>
                                2 Types of entities
                            </Typography>
                        </CardContent>
                    </Card>
                    </Grid>
                </Grid>
            
            </Container>
            <Box component="div" className={classes.started}>
                <Typography align="center" variant="h5">Getting Started</Typography>
            </Box>
        </div>
        
        
    );
};
export default Main;
