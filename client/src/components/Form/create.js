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
        <Grid
          lg={4}
          md={5}
          sm={8}
          xs={10}
          item
          className={classes.createPostAccord}
        >
          <Accordion
            style={{ backgroundColor: mcgpalette0["background-color-2"] }}
          >
            <AccordionSummary
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>
                Create Profile
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <form style={{ width: "100%" }}>
                <Grid container direction="column" justify="space-evenly">
                  <Typography
                    style={{ color: mcgpalette0["text-color-light"] }}
                  >
                    Name
                  </Typography>
                  <TextField className={classes.customTextField} />
                  <Typography
                    style={{ color: mcgpalette0["text-color-light"] }}
                  >
                    Designation
                  </Typography>
                  <TextField className={classes.customTextField} />
                  <Typography
                    style={{ color: mcgpalette0["text-color-light"] }}
                  >
                    Content
                  </Typography>
                  <TextField
                    fullWidth
                    multiline
                    rows={4}
                    className={classes.customTextField}
                  />
                  <ButtonGroup style={{ marginLeft: "auto" }}>
                    <Button
                      className={stylesClasses.customButtonContainedSecondary}
                      style={{ marginTop: "0", marginBottom: "0" }}
                      variant="contained"
                      component="label"
                    >
                      Image
                      <input hidden type="file" />
                    </Button>
                    <Button
                      className={stylesClasses.customButtonContainedSecondary}
                      style={{ marginTop: "0", marginBottom: "0" }}
                    >
                      Submit
                    </Button>
                  </ButtonGroup>
                </Grid>
              </form>
            </AccordionDetails>
          </Accordion>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default Create
