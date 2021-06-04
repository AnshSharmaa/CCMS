import React from "react"
import {useHistory} from "react-router-dom"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"
import {makeStyles} from "@material-ui/core/styles"
import {Link} from "react-router-dom"
import {Button} from "@material-ui/core"
import {deletePost} from "../../../api/api"

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
  return (
    <Link
      to={{
        pathname: "/edit",
        state: post,
      }}
      style={{textDecoration: "none"}}>
      <Card className={classes.root}>
        <CardContent>
          <Typography variant='h5' component='h2'>
            {post.post.Title}
          </Typography>
          <Typography className={classes.pos} color='textSecondary'>
            {post.post.Author}
          </Typography>
          <Typography variant='body2' component='p'>
            {post.post.Content}
          </Typography>
          <Typography variant='body2' component='p'>
            {date}
          </Typography>
        </CardContent>
        <Button onClick={DeletePost}>Del</Button>
      </Card>
    </Link>
  )
}

export default Post
