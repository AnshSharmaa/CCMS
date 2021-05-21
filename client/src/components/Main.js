import React from "react"
import { Box , Card, CardContent, Container, Typography} from '@material-ui/core';
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
    feat : {
        width: "100%"
    },
    cards : {
        flex:1,
    }
  });

const Main = () => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <Box component="div" className={classes.MainDiv}>
            </Box>
            <Box component="div" className={classes.feat}>
                <Typography align="center" variant="h5">Features</Typography>
            </Box>
            <Container className={classes.card}>
            <Card width={1/4}>
                <CardContent>
                    <Typography>
                        Create
                    </Typography>
                </CardContent>
            </Card>
            <Card width={1/4}>
                <CardContent>
                    <Typography>
                        Update
                    </Typography>
                </CardContent>
            </Card>
            <Card width={1/4} className={classes.card}>
                <CardContent>
                    <Typography>
                        Delete
                    </Typography>
                </CardContent>
            </Card>
            <Card width={1/4} className={classes.card}>
                <CardContent>
                    <Typography>
                        2 Types of entities
                    </Typography>
                </CardContent>
            </Card>
            </Container>
            
        </div>
        
        
    );
};
export default Main;
