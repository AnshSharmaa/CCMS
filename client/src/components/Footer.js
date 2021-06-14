import React from "react"
import {Typography, Paper, Grid} from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles"
import mcgpalette0 from "../styles/colors"

const useStyles = makeStyles({
  footerContainer: {
    backgroundColor: mcgpalette0["background-color"],
    color: mcgpalette0["text-color-light"],
    height: "200px",
  },
  git: {
    color: "#2D93D3",
    textDecoration: "none",
    "&:hover": {
      color: "#05cdfc",
      cursor: "pointer",
    },
  },
})

const Footer = () => {
  const classes = useStyles()
  return (
    <Paper className={classes.footerContainer}>
      <Grid
        style={{
          padding: "20px",
          maxWidth: "1500px",
          marginLeft: "auto",
          marginRight: "auto",
          height: "100%",
        }}
        container
        direction='column'
        justify='space-between'
        alignItems='flex-start'>
        <Grid item>
          <Typography>About us</Typography>
        </Grid>
        <Grid item>
          <Typography>This project is a Custom Content Management System which provides users</Typography>
          <Typography>a way to easily present and manage their content</Typography>
        </Grid>
        <Grid item>
          <Typography>Our Team: </Typography>
          <Grid container justify='space-evenly' alignItems='center' style={{minWidth: "400px"}}>
            <Grid item>
              <a href='https://github.com/AnshSharmaa' className={classes.git}>
                Ansh Sharma
              </a>
            </Grid>
            <Grid item>
              {" "}
              <a href='https://github.com/GH-Gursimran' className={classes.git}>
                Gursimran Singh
              </a>
            </Grid>
            <Grid item>
              <a href='https://github.com/shreya-sharma-29' className={classes.git}>
                Shreya Sharma
              </a>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  )
}
export default Footer
