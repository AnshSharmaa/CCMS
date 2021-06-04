import React, {useState, useEffect} from "react"
import {useHistory} from "react-router-dom"
import {TextField, Grid, Card, Button, CardContent} from "@material-ui/core"
import {useLocation} from "react-router-dom"
import styles from "../../styles/styles"
import mcgpalette0 from "../../styles/colors"
import Header from "../../components/header"
import {updatePost} from "../../api/api"

const Edit = () => {
  const stylesClasses = styles()
  const location = useLocation()
  const {post} = location.state
  const postD = post.Date.split("-")
  const date = postD[0] + "-" + postD[1] + "-" + postD[2].split("T")[0]
  const history = useHistory()

  const [postData, setPostData] = useState({
    Title: `${post.Title}`,
    Author: `${post.Author}`,
    Content: `${post.Content}`,
    Date: `${post.Date}`,
  })

  useEffect(() => {
    if (postData) setPostData(postData)
  }, [postData])

  const handleUpdatePost = async (e) => {
    e.preventDefault()
    await updatePost(post._id, postData)
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
      <Header />
      <form onSubmit={handleUpdatePost}>
        <Grid style={{marginTop: 20}} container justify='center' alignItems='center'>
          <Grid item lg={5}>
            <Card style={{backgroundColor: mcgpalette0["background-color-3"]}}>
              <CardContent>
                <Grid container justify='space-between' alignItems='center'>
                  <Grid item>
                    <TextField
                      defaultValue={post.Title}
                      label='Title'
                      InputLabelProps={{
                        shrink: true,
                      }}
                      name='Title'
                      onChange={(e) => setPostData({...postData, Title: e.target.value})}></TextField>
                  </Grid>
                  <Grid item>
                    <TextField
                      defaultValue={post.Author}
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
                  defaultValue={post.Content}
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

export default Edit
