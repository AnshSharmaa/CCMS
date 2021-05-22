import React, { useState } from "react"
import { GoogleLogin } from "react-google-login"

import Gicon from "./icon"

import "./Auth.css"

const Auth = () => {
  const [signedIn, setsignedIn] = useState()

  const switchMode = () => {
    setsignedIn((prevIsSignUp) => !prevIsSignUp)
  }

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")))

  const googleSuccess = async (res) => {
    var result = res?.profileObj
    const token = res?.tokenId

    localStorage.setItem("profile", JSON.stringify({ result, token }))
    switchMode()

    try {
      //dispatch({ type: "AUTH", data: { result, token } })
      //history.push("/")
      alert("nice")
    } catch (error) {
      console.log(error)
    }
  }
  const googleFailure = (error) => {
    console.log("Sign in unsuccessful \n")
    console.log(error)
    alert("Sign in unsuccessful, Please try again")
  }
  return (
    <div className="main">
      <GoogleLogin
        clientId="65050724318-9ost9pd74pn6lcvp7nnm21f6c1lcedd6.apps.googleusercontent.com"
        render={(renderProps) => (
          <button
            className="Glogin"
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
          >
            <Gicon /> Google Sign In
          </button>
        )}
        onSuccess={googleSuccess}
        onFailure={googleFailure}
        cookiePolicy="single_host_origin"
      />

      <p>{signedIn ? "Welcome :" + user.result.name : "not Signed In"}</p>
    </div>
  )
}

export default Auth
