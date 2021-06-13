import React, {useState} from "react"
import {Button, Grid, Typography, TextField, Accordion, AccordionSummary, AccordionDetails} from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles"
import styles from "../../styles/styles"
import mcgpalette0 from "../../styles/colors"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import {createPost} from "../../api/api"
import "./PostForm.css"
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
    maxWidth: "97%",
    padding: 5,
    borderRadius: 5,
    backgroundColor: mcgpalette0["background-color-3"],
  },
})

const PostForm = (user) => {
  const stylesClasses = styles()
  const classes = useStyles()
  const [postData, setPostData] = useState({
    Title: "",
    Author: "",
    Content: "",
    Date: "",
  })

  // useEffect(() => {
  //   if (postData) setPostData(postData)
  // }, [postData])

  const clearPost = () => {
    setPostData({
      Title: "",
      Author: "",
      Content: "",
      Date: "",
    })
  }

  const handleSubmitPost = async (e) => {
    e.preventDefault()
    await createPost(postData)
      .then((response) => {
        console.log(response)
        window.location.reload()
      })
      .catch((error) => {
        console.error("Error making post: ", error)
      })
    clearPost()
  }

  return (
    <Grid item lg={5} md={5} sm={8} xs={10} className={classes.createPostAccord}>
      <Accordion style={{backgroundColor: mcgpalette0["background-color-2"]}}>
        <AccordionSummary expandIcon={<ExpandMoreIcon style={{color: mcgpalette0["text-color-light"]}} />} aria-controls='panel1a-content' id='panel1a-header'>
          <Typography variant='h5' className={classes.heading}>
            Create Post
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container direction='column' justify='space-evenly'>
            <form style={{width: "100%"}} onSubmit={handleSubmitPost}>
              <div style={{display: "flex", justifyContent: "space-evenly", flexWrap: "nowrap"}}>
                <div className='subRapper' style={{width: "100%"}}>
                  <Typography style={{color: mcgpalette0["text-color-light"]}}>Title</Typography>
                  <TextField required className={classes.customTextField} name='Title' onChange={(e) => setPostData({...postData, Title: e.target.value})} />
                </div>
                <div className='subRapper' style={{width: "100%"}}>
                  <Typography style={{color: mcgpalette0["text-color-light"]}}>Author</Typography>
                  <TextField required className={classes.customTextField} name='Author' onChange={(e) => setPostData({...postData, Author: e.target.value})} />
                </div>
              </div>

              <Typography style={{color: mcgpalette0["text-color-light"]}}>Content</Typography>
              <TextField required fullWidth multiline rows={4} className={classes.customTextField} name='Content' onChange={(e) => setPostData({...postData, Content: e.target.value})} />

              <Typography style={{color: mcgpalette0["text-color-light"]}}>Date</Typography>
              <TextField required style={{marginTop: "10px", marginBottom: "10px", maxWidth: "150px"}} className={classes.customTextField} type='date' InputLabelProps={{shrink: true}} name='Date' onChange={(e) => setPostData({...postData, Date: e.target.value})} />

              <div>
                <Button className={stylesClasses.customButtonContainedSecondary} type='submit' style={{width: "160px", padding: "10px 0", fontWeight: "600", margin: "0"}}>
                  Submit
                </Button>
              </div>
            </form>
          </Grid>
        </AccordionDetails>
      </Accordion>
    </Grid>
  )
}

export default PostForm
