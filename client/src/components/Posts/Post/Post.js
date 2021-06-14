import React from "react"
import {useHistory} from "react-router-dom"
import Grid from "@material-ui/core/Grid"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"
import {makeStyles} from "@material-ui/core/styles"
import {Link} from "react-router-dom"
import {Button} from "@material-ui/core"
import {deletePost} from "../../../api/api"
import DeleteForeverIcon from "@material-ui/icons/DeleteForever"

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

const Post = (post) => {
  const classes = useStyles()
  const user = JSON.parse(localStorage.getItem("profile"))
  const postD = post.post.Date.split("-")
  const date = postD[0] + "-" + postD[1] + "-" + postD[2].split("T")[0]
  const history = useHistory()

  const DeletePost = async (e) => {
    await deletePost(post.post._id)
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.error("Error making post: ", error)
      })

    history.push("/data")
  }
  if (user) {
    return (
      <Link to={{pathname: "/edit", state: post}} style={{textDecoration: "none"}}>
        <Card className={classes.root}>
          <CardContent>
            <Grid container justify='space-between'>
              <Grid item>
                <Typography variant='h5' component='h2'>
                  {post.post.Title}
                </Typography>
              </Grid>
              <Grid>
                <Typography variant='body2' component='p'>
                  {date}
                  <Button style={{marginLeft: "auto"}} onClick={DeletePost}>
                    <DeleteForeverIcon />
                  </Button>
                </Typography>
              </Grid>
            </Grid>
            <Typography className={classes.pos} color='textSecondary'>
              {post.post.Author}
            </Typography>
            <Typography variant='body2' component='p'>
              {post.post.Content}
            </Typography>
          </CardContent>
        </Card>
      </Link>
    )
  }
  if (!user) {
    return (
      <Card className={classes.root}>
        <CardContent>
          <Grid container justify='space-between'>
            <Grid item>
              <Typography variant='h5' component='h2'>
                {post.post.Title}
              </Typography>
            </Grid>
            <Grid>
              <Typography variant='body2' component='p'>
                {date}
              </Typography>
            </Grid>
          </Grid>
          <Typography className={classes.pos} color='textSecondary'>
            {post.post.Author}
          </Typography>
          <Typography variant='body2' component='p'>
            {post.post.Content}
          </Typography>
        </CardContent>
      </Card>
    )
  }
}

export default Post
