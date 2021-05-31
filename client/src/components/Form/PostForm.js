import React, { useState, useEffect } from "react"
import {
  Button,
  Grid,
  Typography,
  TextField,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
  createPostAccord: {
    marginTop: "20px",
    marginBottom: "20px",
    maxWidth: "1200px",
  },
})

const PostForm = (user) => {
  const classes = useStyles()
  const [postData, setPostData] = useState({
    Title: "",
    Author: "",
    Content: "",
    Date: "",
  })

  useEffect(() => {
    if (postData) setPostData(postData)
  }, [postData])

  const clearPost = () => {
    // setCurrentId(0)
    setPostData({
      Title: "",
      Author: "",
      Content: "",
      Date: "",
    })
    var file = document.getElementsByTagName("input")
    file[0].value = ""
  }

  const handleSubmitPost = async (e) => {
    e.preventDefault()

    // if (currentId === 0) {
    //   dispatch(createPost({ ...postData, name: user?.result?.name }))
    // } else {
    //   dispatch(updatePost(currentId, { ...postData, name: user?.result?.name }))
    // }
    clearPost()
  }
  return (
    <Grid
      item
      lg={5}
      md={5}
      sm={8}
      xs={10}
      className={classes.createPostAccord}
    >
      <Accordion>
        <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
          <Typography className={classes.heading}>Create Post</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <form style={{ width: "100%" }}>
            <Grid container direction="column" justify="space-evenly">
              <TextField
                style={{
                  marginTop: "10px",
                  marginBottom: "10px",
                  maxWidth: "400px",
                }}
                id="standard-basic"
                label="Title"
              />
              <TextField
                style={{
                  marginTop: "10px",
                  marginBottom: "10px",
                  maxWidth: "400px",
                }}
                id="standard-basic"
                label="Author"
              />
              <TextField
                fullWidth
                multiline
                rows={4}
                style={{ marginTop: "10px", marginBottom: "10px" }}
                id="standard-basic"
                label="Content"
              />
              <TextField
                style={{
                  marginTop: "10px",
                  marginBottom: "10px",
                  maxWidth: "400px",
                }}
                id="standard-basic"
                label="Date"
                type="date"
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <Button>Submit</Button>
            </Grid>
          </form>
        </AccordionDetails>
      </Accordion>
    </Grid>
  )
}

export default PostForm
