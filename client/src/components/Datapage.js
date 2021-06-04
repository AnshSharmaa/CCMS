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
    backgroundColor: mcgpalette0["background-color-2"],
    color: mcgpalette0["text-color-dark"],
  },
  cardProfile: {
    padding: "10px",
    backgroundColor: mcgpalette0["background-color-2"],
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
      <Paper
        className={stylesClasses.customBackground}
        style={{ marginTop: "2em" }}
      >
        <Grid container direction="row" alignItems="flex-start" justify="space-between">
            <Grid lg={7} md={7} sm={12} xs={12} item className={classes.cardPost}>
              <Posts />
            </Grid>
            <Grid lg={5} md={5} sm={12} xs={12} item className={classes.cardProfile}>
              <Profiles />
            </Grid>
        </Grid>
      </Paper>
    </Paper>
  )
}
export default Datapage
