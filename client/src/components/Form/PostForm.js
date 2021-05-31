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
import styles from "../../styles/styles"
import mcgpalette0 from "../../styles/colors"

const useStyles = makeStyles({
  createPostAccord: {
    marginTop: "20px",
    marginBottom: "20px",
    maxWidth: "1200px",
  },
  heading: {
    color: mcgpalette0["text-color-light"],
  },
  customTextField: {
    marginTop: "10px",
    marginBottom: "10px",
    maxWidth: "400px",
    padding: 5,
    borderRadius: 5,
    backgroundColor: mcgpalette0["background-color-3"],
  },
})

const PostForm = (user) => {
  const stylesClasses = styles()
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
      <Accordion style={{ backgroundColor: mcgpalette0["background-color-2"] }}>
        <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
          <Typography variant="h5" className={classes.heading}>
            Create Post
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <form style={{ width: "100%" }}>
            <Grid container direction="column" justify="space-evenly">
              <Typography style={{ color: mcgpalette0["text-color-light"] }}>
                Title
              </Typography>
              <TextField className={classes.customTextField} />
              <Typography style={{ color: mcgpalette0["text-color-light"] }}>
                Author
              </Typography>
              <TextField className={classes.customTextField} />
              <Typography style={{ color: mcgpalette0["text-color-light"] }}>
                Content
              </Typography>
              <TextField 
                fullWidth
                multiline
                rows={4}
                className={classes.customTextField} />
              <Typography style={{ color: mcgpalette0["text-color-light"] }}>
                Date
              </Typography>
              <TextField
                style={{
                  marginTop: "10px",
                  marginBottom: "10px",
                  maxWidth: "150px",
                }}
                className={classes.customTextField}
                type="date"
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <Button
                className={stylesClasses.customButtonContainedSecondary}
                style={{ marginLeft: "auto" }}
              >
                Submit
              </Button>
            </Grid>
          </form>
        </AccordionDetails>
      </Accordion>
    </Grid>
  )
}

export default PostForm
