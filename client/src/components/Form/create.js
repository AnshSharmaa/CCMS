import React from "react"
import { Grid, Paper } from "@material-ui/core"
import mcgpalette0 from "../../styles/colors"

import PostForm from "./PostForm"
import ProfileForm from "./ProfileForm"

const Create = () => {
  return (
    <Paper style={{ backgroundColor: mcgpalette0["background-color"] }}>
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="flex-start"
        style={{ marginTop: "20px", marginBottom: "20px" }}
      >
        <PostForm />
        <ProfileForm />
      </Grid>
    </Paper>
  )
}

export default Create
