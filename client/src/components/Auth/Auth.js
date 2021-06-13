import React, {useState} from "react"
import {GoogleLogin} from "react-google-login"
import {Button, Typography} from "@material-ui/core"
import {useHistory} from "react-router-dom"

import Gicon from "./icon"
import styles from "../../styles/styles"

import "./Auth.css"

const Auth = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")))
  const stylesClasses = styles()

  const history = useHistory()

  const logout = () => {
    localStorage.clear()
    setUser(null)
    window.location.reload()
  }

  const googleSuccess = async (res) => {
    try {
      const result = res?.profileObj
      const token = res?.tokenId

      localStorage.setItem("profile", JSON.stringify({result, token}))
      setUser(result, token)
      console.log(result)
      console.log(token)
      history.push("/data")
      window.location.reload()
    } catch (error) {
      console.log(error)
    }
  }

  const googleFailure = (error) => {
    console.log("Sign in unsuccessful \n")
    console.log(error)
  }

  return (
    <div className='GoogleButton'>
      {!user && (
        <GoogleLogin
          clientId='65050724318-9ost9pd74pn6lcvp7nnm21f6c1lcedd6.apps.googleusercontent.com'
          render={(renderProps) => (
            <Button color='inherit' className={stylesClasses.customButtonContained} onClick={renderProps.onClick} disabled={renderProps.disabled}>
              <Typography>Sign In</Typography>
              <div style={{marginLeft: "10px"}}>
                <Gicon />
              </div>
            </Button>
          )}
          onSuccess={googleSuccess}
          onFailure={googleFailure}
          cookiePolicy='single_host_origin'
        />
      )}
      {user && (
        <Button color='inherit' className={stylesClasses.customButtonContained} onClick={logout}>
          Logout
        </Button>
      )}
    </div>
  )
}

export default Auth
