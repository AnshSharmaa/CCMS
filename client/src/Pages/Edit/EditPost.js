import React, {useState} from "react"
import styles from "../../styles/styles"
import mcgpalette0 from "../../styles/colors"
import {updatePost} from "../../api/api"

import {useHistory} from "react-router-dom"
import {TextField, Grid, Card, Button, CardContent} from "@material-ui/core"

const EditPost = (post) => {
  const stylesClasses = styles()

  const [postData, setPostData] = useState({
    Title: `${post.post.Title}`,
    Author: `${post.post.Author}`,
    Content: `${post.post.Content}`,
    Date: `${post.post.Date}`,
  })
  const postD = post.post.Date.split("-")
  const date = postD[0] + "-" + postD[1] + "-" + postD[2].split("T")[0]
  const history = useHistory()

  const handleUpdatePost = async (e) => {
    e.preventDefault()
    await updatePost(post.post._id, postData)
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.error("Error making post: ", error)
      })

    history.push("/data")
  }

  return (
    <>
      <form onSubmit={handleUpdatePost}>
        <Grid style={{marginTop: 20}} container justify='center' alignItems='center'>
          <Grid item lg={5}>
            <Card style={{backgroundColor: mcgpalette0["background-color-3"]}}>
              <CardContent>
                <Grid container justify='space-between' alignItems='center'>
                  <Grid item>
                    <TextField
                      defaultValue={post.post.Title}
                      label='Title'
                      InputLabelProps={{
                        shrink: true,
                      }}
                      name='Title'
                      onChange={(e) => setPostData({...postData, Title: e.target.value})}></TextField>
                  </Grid>
                  <Grid item>
                    <TextField
                      defaultValue={post.post.Author}
                      label='Author'
                      InputLabelProps={{
                        shrink: true,
                      }}
                      name='Author'
                      onChange={(e) => setPostData({...postData, Author: e.target.value})}></TextField>
                  </Grid>
                </Grid>
                <br />
                <TextField
                  label='Content'
                  fullWidth
                  multiline
                  rows={8}
                  defaultValue={post.post.Content}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  name='Content'
                  onChange={(e) => setPostData({...postData, Content: e.target.value})}></TextField>
                <Grid container justify='space-between' alignItems='center'>
                  <Grid item>
                    <TextField
                      style={{
                        marginTop: "10px",
                        marginBottom: "10px",
                        maxWidth: "150px",
                      }}
                      defaultValue={date}
                      type='date'
                      InputLabelProps={{
                        shrink: true,
                      }}
                      name='Date'
                      onChange={(e) => setPostData({...postData, Date: e.target.value})}
                    />
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

export default EditPost
