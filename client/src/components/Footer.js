import React from "react"
import { Typography, Paper, Grid } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import mcgpalette0 from "../styles/colors"

const useStyles = makeStyles({
  footerContainer: {
    backgroundColor: mcgpalette0["background-color"],
    color: mcgpalette0["text-color-light"],
    height: "200px",
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
        direction="column"
        justify="space-between"
        alignItems="flex-start"
      >
        <Grid item>
          <Typography>About us</Typography>
        </Grid>
        <Grid item>
          <Typography>
            This project is a Custom Content Management System which provides
            users
          </Typography>
          <Typography>a way to easily present their content</Typography>
        </Grid>
        <Grid item>
          <Typography>Our Team: </Typography>
          <Grid
            container
            justify="space-evenly"
            alignItems="center"
            style={{ minWidth: "400px" }}
          >
            <Grid item>Name1</Grid>
            <Grid item>Name2</Grid>
            <Grid item>Name3</Grid>
            <Grid item>Name4</Grid>
            <Grid item>Name5</Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  )
}
export default Footer
