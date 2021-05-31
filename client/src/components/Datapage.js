import React from "react"
import { Paper, Grid } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

import Create from "./Form/create"
import Posts from "./Posts/Posts"
import Profiles from "./Profiles/Profiles"
import styles from "../styles/styles"
import mcgpalette0 from "../styles/colors"

const useStyles = makeStyles({
  cardPost: {
    padding: "10px",
    backgroundColor: mcgpalette0["background-color-3"],
    color: mcgpalette0["text-color-dark"],
  },
  cardProfile: {
    padding: "10px",
    backgroundColor: mcgpalette0["background-color-3"],
    color: mcgpalette0["text-color-dark"],
  },
})

const Datapage = () => {
  const classes = useStyles()
  const stylesClasses = styles()
  return (
    <Paper
      className={stylesClasses.customBackground3}
      style={{ maxWidth: "1800px", margin: "auto" }}
    >
      <Grid>
        <Create />
      </Grid>
      <Paper className={stylesClasses.customBackground}>
        <Grid container direction="row" justify="center">
          <Grid container style={{ maxWidth: "1000px" }}>
            <Grid item className={classes.cardPost}>
              <Posts />
            </Grid>
          </Grid>
          <Grid container style={{ maxWidth: "700px" }}>
            <Grid item className={classes.cardProfile}>
              <Profiles />
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Paper>
  )
}
export default Datapage
