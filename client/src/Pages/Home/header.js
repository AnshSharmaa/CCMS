import React from 'react';
import "./header.css";
import Logo from './logo.jpeg';
function Header() {
    return (  <div id="ab"> 
    <div id="cd">
    <button id="am"> <b> Create/All data </b></button>
    <div id="ef">
    <b>
        CCMS
    </b>
    </div>    
    </div>
    <div id="gh">
   <img src={Logo} alt="logo"/>
   
 </div>
 <center>
  Hi! 
  Welcome to CCMS
  </center> 
</div>);
}
export default Header;