import React from "react"
import "./header.css"
import Logo from "./logo.jpeg"
function Header() {
  return (
    <div id="header">
      <div id="nav">
        <h2 className="name">CCMS</h2>
        <div>
          <button id="dataButton">Create/All data</button>
        </div>
      </div>
      <div id="welcome">
        <img src={Logo} alt="logo" />
        <h1 className="rightAlign">
          Hi! Welcome to
          <br /> CCMS
        </h1>
      </div>
    </div>
  )
}
export default Header
