import React from "react"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"
import {makeStyles} from "@material-ui/core/styles"
import {Link} from "react-router-dom"

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
            {post.post.Date}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  )
}

export default Post
