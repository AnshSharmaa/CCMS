import React, { useState, useEffect } from "react"
import {
  Button,
  Grid,
  Typography,
  TextField,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import FileBase from "react-file-base64"

const useStyles = makeStyles({
  createPostAccord: {
    marginTop: "20px",
    marginBottom: "20px",
    maxWidth: "1200px",
  },
})

const ProfileForm = (user) => {
  const classes = useStyles()
  const [profileData, setProfileData] = useState({
    Name: "",
    Designation: "",
    Content: "",
    Image: "",
  })
  const clearProfile = () => {
    // setCurrentId(0)
    setProfileData({
      Name: "",
      Designation: "",
      Content: "",
      Image: "",
    })
    var file = document.getElementsByTagName("input")
    file[0].value = ""
  }

  const handleSubmitProfile = async (e) => {
    e.preventDefault()

    // if (currentId === 0) {
    //   dispatch(createPost({ ...postData, name: user?.result?.name }))
    // } else {
    //   dispatch(updatePost(currentId, { ...postData, name: user?.result?.name }))
    // }
    clearProfile()
  }
  return (
    <Grid
      lg={4}
      md={5}
      sm={8}
      xs={10}
      item
      className={classes.createPostAccord}
    >
      <Accordion>
        <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
          <Typography className={classes.heading}>Create Profile</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <form style={{ width: "100%" }}>
            <Grid container direction="column" justify="space-evenly">
              <TextField
                style={{ marginTop: "10px", marginBottom: "10px" }}
                id="standard-basic"
                label="Name"
              />
              <TextField
                style={{ marginTop: "10px", marginBottom: "10px" }}
                id="standard-basic"
                label="Designation"
              />
              <TextField
                fullWidth
                multiline
                rows={4}
                style={{ marginTop: "10px", marginBottom: "10px" }}
                id="standard-basic"
                label="Content"
              />
              <label className="newButton">
                Add image
                <FileBase
                  name="file"
                  type="file"
                  multiple={false}
                  onDone={({ base64 }) =>
                    setProfileData({ ...profileData, Image: base64 })
                  }
                />
              </label>
              <Button>Submit</Button>
            </Grid>{" "}
          </form>
        </AccordionDetails>
      </Accordion>
    </Grid>
  )
}

export default ProfileForm
