import React from "react"
import {
  Button,
  AppBar,
  Toolbar,
  Box,
  TextareaAutosize,
  Grid,
  Typography,
  TextField,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  ButtonGroup,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import mcgpalette0 from "../../styles/colors"
import styles from "../../styles/styles"
import PostForm from "./PostForm"
import ProfileForm from "./ProfileForm"

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

const Create = () => {
  const classes = useStyles()
  const stylesClasses = styles()
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
        <ProfileForm/>
      </Grid>
    </Paper>
  )
}

export default Create
