import { TextField,Grid, Paper, Card, Button, CardActions, Typography,CardContent } from "@material-ui/core"
import React from "react"
import { useLocation } from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles';
import styles from "../../styles/styles"
import mcgpalette0 from "../../styles/colors"

const useStyles = makeStyles({
  
});

const Edit = () => {
  const stylesClasses = styles()
  const classes = useStyles();
  var dateHash = {
    Jan : '01',
    Feb: '02',
    Mar: '03',
    Apr: '04',
    May: '05',
    Jun: '06',
    Jul: '07',
    Aug: '08',
    Sep: '09',
    Oct: '10',
    Nov: '11',
    Dec: '12'
   };
  const location = useLocation()
  const { post } = location.state
  const postD = post.Date.split(" ");
  const date = postD[3]+"-"+dateHash[postD[1]]+"-"+postD[2]
  console.log(post)
  return (
    <form>
    <Grid
    style={{marginTop:20}}
    container
    justify="center"
    alignItems="center"

    >
      <Grid item lg={5}>
        <Card
        style={{backgroundColor:mcgpalette0['background-color-3']}}
        >
          <CardContent>
            <Grid
            container
            justify="space-between"
            alignItems="center"
            >
              <Grid item>
                <TextField 
                defaultValue={post.Title} 
                label="Title"
                  InputLabelProps={{
                  shrink: true,
                  }} 
                ></TextField>
                </Grid>
              <Grid item>
                <TextField 
                defaultValue={post.Author} 
                label="Author"
                  InputLabelProps={{
                  shrink: true,
                  }}>
                </TextField>
              </Grid>
            </Grid>
            <br/>
            <TextField
            label="Content" 
            fullWidth
            multiline
            rows={8}
            defaultValue={post.Content}
            InputLabelProps={{
              shrink: true,
              }}>
            </TextField>
            <Grid
            container
            justify="space-between"
            alignItems="center"
            >
              <Grid item><TextField
                style={{
                  marginTop: "10px",
                  marginBottom: "10px",
                  maxWidth: "150px",
                }}
                defaultValue={date}
                type="date"
                InputLabelProps={{
                  shrink: true,
                }}
              />
              </Grid>
              <Grid item><Button className={stylesClasses.customButtonContainedSecondary}>Confirm</Button></Grid>
            </Grid>
            
          </CardContent>
        </Card>
      </Grid>
    </Grid></form>
  )
}

export default Edit
