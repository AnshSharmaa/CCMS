import React from "react"
import {
  Button,
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

const useStyles = makeStyles({
  createPostAccord: {
    marginTop: "20px",
    marginBottom: "20px",
    maxWidth: "1200px",
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
        <Grid
          item
          lg={5}
          md={5}
          sm={8}
          xs={10}
          className={classes.createPostAccord}
        >
          <Accordion
            style={{ backgroundColor: mcgpalette0["background-color-3"] }}
          >
            <AccordionSummary
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
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
                      maxWidth: "200px",
                    }}
                    id="standard-basic"
                    label="Date"
                    type="date"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                  <Button
                    className={stylesClasses.customButtonContained}
                    style={{ marginLeft: "auto" }}
                  >
                    Submit
                  </Button>
                </Grid>
              </form>
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid
          lg={4}
          md={5}
          sm={8}
          xs={10}
          item
          className={classes.createPostAccord}
        >
          <Accordion
            style={{ backgroundColor: mcgpalette0["background-color-3"] }}
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
                  <ButtonGroup style={{ marginLeft: "auto" }}>
                    <Button
                      className={stylesClasses.customButtonContained}
                      style={{ marginTop: "0", marginBottom: "0" }}
                      variant="contained"
                      component="label"
                    >
                      Image
                      <input hidden type="file" />
                    </Button>
                    <Button
                      className={stylesClasses.customButtonContained}
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