import React, {useState} from "react"
import {Grid, Paper, Typography} from "@material-ui/core"
import mcgpalette0 from "../../styles/colors"

import PostForm from "./PostForm"
import ProfileForm from "./ProfileForm"

const Create = () => {
  const [user] = useState(JSON.parse(localStorage.getItem("profile")))
  if (!user?.result?.name) {
    return (
      <Paper style={{backgroundColor: mcgpalette0["background-color"]}}>
        <Typography variant='h6' align='center' style={{color: "white"}}>
          You need to Sign In to create or edit data.
        </Typography>
      </Paper>
    )
  }
  return (
    <Paper style={{backgroundColor: mcgpalette0["background-color"]}}>
      <Grid container direction='row' justify='space-evenly' alignItems='flex-start' style={{marginTop: "20px", marginBottom: "20px"}}>
        <PostForm user={user} />
        <ProfileForm />
      </Grid>
    </Paper>
  )
}

export default Create
