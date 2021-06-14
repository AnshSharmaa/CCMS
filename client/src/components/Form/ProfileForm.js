import React, {useState} from "react"
import {Button, ButtonGroup, Grid, Typography, TextField, Accordion, AccordionSummary, AccordionDetails} from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles"
import FileBase from "react-file-base64"
import styles from "../../styles/styles"
import mcgpalette0 from "../../styles/colors"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import {createProfile} from "../../api/api"

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

const ProfileForm = (user) => {
  const stylesClasses = styles()
  const classes = useStyles()
  const [profileData, setProfileData] = useState({
    Name: "",
    Designation: "",
    Content: "",
    Image: "",
  })
  const clearProfile = () => {
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
    await createProfile(profileData)
      .then((response) => {
        console.log(response)
        window.location.reload()
      })
      .catch((error) => {
        console.error("Error making post: ", error)
      })
    clearProfile()
  }
  return (
    <Grid lg={4} md={5} sm={8} xs={10} item className={classes.createPostAccord}>
      <Accordion style={{backgroundColor: mcgpalette0["background-color-2"]}}>
        <AccordionSummary expandIcon={<ExpandMoreIcon style={{color: mcgpalette0["text-color-light"]}} />} aria-controls='panel1a-content' id='panel1a-header'>
          <Typography variant='h5' className={classes.heading}>
            Create Profile
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <form style={{width: "100%"}} onSubmit={handleSubmitProfile}>
            <Grid container direction='column' justify='space-evenly'>
              <Typography style={{color: mcgpalette0["text-color-light"]}}>Name</Typography>
              <TextField required className={classes.customTextField} name='Name' onChange={(e) => setProfileData({...profileData, Name: e.target.value})} />

              <Typography style={{color: mcgpalette0["text-color-light"]}}>Designation</Typography>
              <TextField required className={classes.customTextField} name='Designation' onChange={(e) => setProfileData({...profileData, Designation: e.target.value})} />

              <Typography style={{color: mcgpalette0["text-color-light"]}}>Content</Typography>
              <TextField required fullWidth multiline rows={4} className={classes.customTextField} name='Content' onChange={(e) => setProfileData({...profileData, Content: e.target.value})} />

              <ButtonGroup style={{padding: "10px 0", fontWeight: "600", margin: "0"}}>
                <Button className={stylesClasses.customButtonContainedSecondary} style={{marginTop: "0", marginBottom: "0", fontWeight: "600"}} variant='contained' component='label'>
                  <FileBase name='file' type='file' multiple={false} onDone={({base64}) => setProfileData({...profileData, Image: base64})} />
                </Button>
                <Button type='submit' className={stylesClasses.customButtonContainedSecondary} style={{marginTop: "0", marginBottom: "0", fontWeight: "600"}}>
                  Submit
                </Button>
              </ButtonGroup>
            </Grid>
          </form>
        </AccordionDetails>
      </Accordion>
    </Grid>
  )
}

export default ProfileForm
