import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Typography from "@material-ui/core/Typography"

const useStyles = makeStyles({
  root: {
    minWidth: 275,
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
    height: 160,
  },
})

const Profile = (profile) => {
  const classes = useStyles()
  console.log(profile)
  return (
    <Card className={classes.root}>
      <CardContent>
        <CardMedia
          className={classes.media}
          image="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
          title="Contemplative Reptile"
        />
        <Typography variant="h5" component="h2">
          {profile.profile.Name}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {profile.profile.Designation}
        </Typography>
        <Typography variant="body2" component="p">
          {profile.profile.Content}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default Profile
