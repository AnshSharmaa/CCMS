import React, {useState, useEffect} from "react"
import {makeStyles} from "@material-ui/core/styles"
import {Grid, CircularProgress} from "@material-ui/core"
import Profile from "./Profile/Profile"
import * as api from "../../api/api"

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
})

const Profiles = () => {
  const classes = useStyles()
  const [profiles, setProfiles] = useState({Profiles: []})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  useEffect(() => {
    getData()
  }, [])

  async function getData() {
    await api
      .fetchProfiles()
      .then((response) => {
        setProfiles(response.data)
      })
      .catch((error) => {
        console.error("Error fetching data: ", error)
        setError(error)
      })
      .finally(() => {
        setLoading(false)
      })
  }
  if (loading) return "Loading..."
  if (error) return "Error!"

  return !profiles.length ? (
    <CircularProgress />
  ) : (
    <Grid className={classes.container} container alignItems='stretch' spacing={3}>
      {profiles.map((profile) => (
        <Grid key={profile._id} item xs={12} sm={6} md={6}>
          <Profile profile={profile} />
        </Grid>
      ))}
    </Grid>
  )
}

export default Profiles
