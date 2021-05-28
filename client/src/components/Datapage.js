import React from "react"
import { Paper, Grid } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import Create from "./Create"
import Posts from "./Posts/Posts"
import Profiles from "./Profiles/Profiles"

const useStyles = makeStyles({
  cardPost: {
    padding: "10px",
  },
  cardProfile: {
    padding: "10px",
  },
})

const Datapage = () => {
  const classes = useStyles()
  return (
    <Paper style={{ maxWidth: "1800px", margin: "auto" }}>
      <Grid>
        <Create />
      </Grid>
      <Paper>
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
