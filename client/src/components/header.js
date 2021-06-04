import React from "react"
import {Link} from "react-router-dom"
import {Button, AppBar, Toolbar, Typography, IconButton} from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles"
import Auth from "./Auth/Auth"
import styles from "../styles/styles"

const useStyles = makeStyles({
  siteName: {
    flex: 1,
    textDecoration: "none",
    color: "#fff",
    fontWeight: 700,
    fontSize: "1.5rem",
  },
})

const Header = () => {
  const classes = useStyles()
  const stylesClasses = styles()
  return (
    <AppBar
      position='static'
      style={{
        background: "linear-gradient(39deg, rgba(11,6,101,1) 0%, rgba(141,42,74,89) 0%, rgba(204,46,93,1) 52%, rgba(210,40,130,1) 73%, rgba(87,153,206,1) 100%, rgba(9,225,255,1) 100%)",
        background: "#1a1a1a",
      }}>
      <Toolbar>
        <IconButton edge='start' color='inherit' aria-label='menu' component={Link} to='/'></IconButton>

        <Typography className={classes.siteName} component={Link} to='/'>
          Custom CMS
        </Typography>

        <Button className={stylesClasses.customButtonContained} component={Link} to='/'>
          Home
        </Button>

        <Button className={stylesClasses.customButtonContained} component={Link} to='/data'>
          Create/All Data
        </Button>

        <Auth />
      </Toolbar>
    </AppBar>
  )
}
export default Header
