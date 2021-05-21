import React from "react"
import { GoogleLogin } from "react-google-login"

import Gicon from "./icon"

import "./Auth.css"

const Auth = () => {
  const state = null
  return (
    <div className="main">
      <div>ads</div>
      <GoogleLogin
        clientId="id"
        render={(renderProps) => (
          <button className="Glogin" onClick={renderProps.onClick}>
            <Gicon /> Google Sign In
          </button>
        )}
      />
    </div>
  )
}

export default Auth
