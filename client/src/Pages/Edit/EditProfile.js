import React, {useState} from "react"
import styles from "../../styles/styles"
import mcgpalette0 from "../../styles/colors"
import {updateProfile} from "../../api/api"
import {makeStyles} from "@material-ui/core/styles"
import {useHistory} from "react-router-dom"
import {TextField, Grid, Card, Button, CardContent, CardMedia} from "@material-ui/core"

const useStyles = makeStyles({
  root: {
    maxWidth: 200,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  media: {
    borderRadius: 5,
    maxHeight: 240,
  },
})


const EditProfile = (profile) => {
  const stylesClasses = styles()
  const classes = useStyles()
  const [profileData, setProfileData] = useState({
    Name: `${profile.profile.Name}`,
    Designation: `${profile.profile.Designation}`,
    Content: `${profile.profile.Content}`,
    Image: `${profile.profile.Image}`,
  })
  console.log(profile)
  const history = useHistory()

  const handleUpdateProfile = async (e) => {
    e.preventDefault()
    await updateProfile(profile.profile._id, profileData)
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.error("Error making profile: ", error)
      })

    history.push("/data")
  }

  return (
    <>
      <form onSubmit={handleUpdateProfile}>
        <Grid style={{marginTop: 20}} container justify='center' alignItems='center'>
          <Grid item lg={4}>
            <Card style={{backgroundColor: mcgpalette0["background-color-3"]}}>
              <CardContent>
                <Button className={stylesClasses.customButton} style={{marginTop: "4px", marginBottom: "10px", backgroundColor:'#00000000'}} variant='contained' component='label'>
                  <img className={classes.media} src='https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg' title='Contemplative Reptile' />
                  <input hidden type='file' />
                </Button>
                <Grid container justify='space-between' alignItems='center'>
                  <Grid item>
                    <TextField
                      defaultValue={profile.profile.Name}
                      label='Name'
                      InputLabelProps={{
                        shrink: true,
                      }}
                      name='Name'
                      onChange={(e) => setProfileData({...profileData, Name: e.target.value})}></TextField>
                  </Grid>
                  <Grid item>
                    <TextField
                      defaultValue={profile.profile.Designation}
                      label='Designation'
                      InputLabelProps={{
                        shrink: true,
                      }}
                      name='Designation'
                      onChange={(e) => setProfileData({...profileData, Designation: e.target.value})}></TextField>
                  </Grid>
                </Grid>
                <br />
                <TextField
                  label='Content'
                  fullWidth
                  multiline
                  rows={5}
                  defaultValue={profile.profile.Content}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  name='Content'
                  onChange={(e) => setProfileData({...profileData, Content: e.target.value})}></TextField>
                <Grid container justify='space-between' alignItems='center'>
                  <Grid item>
                    
                  </Grid>
                  <Grid item>
                    <Button className={stylesClasses.customButtonContainedSecondary} type='submit'>
                      Confirm
                    </Button>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </form>
    </>
  )
}

export default EditProfile
