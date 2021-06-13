import React from "react"
import {useHistory} from "react-router-dom"
import {Link} from "react-router-dom"
import {deleteProfile} from "../../../api/api"
import {makeStyles} from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Typography from "@material-ui/core/Typography"
import {Button, Grid} from "@material-ui/core"
import DeleteForeverIcon from "@material-ui/icons/DeleteForever"

const useStyles = makeStyles({
  root: {
    minWidth: 200,
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
    minHeight: 240,
  },
})

const Profile = (profile) => {
  const classes = useStyles()
  const history = useHistory()

  const DeleteProfile = async (e) => {
    await deleteProfile(profile.profile._id)
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.error("Error making post: ", error)
      })

    history.push("/data")
  }

  return (
    <Link to={{pathname: "/edit", state: profile}} style={{textDecoration: "none"}}>
      <Card className={classes.root}>
        <CardContent>
          <CardMedia className={classes.media} image={profile.profile.Image || "https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"} title='Contemplative Reptile' />
          <Grid container direction='row' justify='space-between'>
            <Grid item>
              <Typography variant='h6' component='h2'>
                {profile.profile.Name}
              </Typography>
            </Grid>
            <Grid item>
              <Typography>
                <Button style={{marginLeft: "auto"}} onClick={DeleteProfile}>
                  <DeleteForeverIcon />
                </Button>
              </Typography>
            </Grid>
          </Grid>
          
          <Typography className={classes.pos} color='textSecondary'>
            {profile.profile.Designation}
          </Typography>
          
          <Typography variant='body2' component='p'>
            {profile.profile.Content}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  )
}

export default Profile
