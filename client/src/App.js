import React from "react"
import './App.css';
const App = () => {
  return (
    <>
    <div>
     <form action="/action_page.php">
    <div class="row">
      <div class="col-25">
      </div>
      <div class="col-75">
        <input type="text" id="fname" name="firstname" placeholder="Title"/>
      </div>
    </div>
    <div class="row">
      <div class="col-25">
      </div>
      <div class="col-75">
        <input type="text" id="lname" name="lastname" placeholder="Author Name"/>
      </div>
    </div>
    <div class="row">
      <div class="col-25">
      </div>
      <div class="col-75">
        <textarea id="content" name="subject" placeholder="Content" style="height:200px"></textarea><br>
      </div>
    <div class="row">
      <input type="Date" placeholder="Date"/>
    </div>
</div>

<label class="switch">
  <input type="checkbox" checked/>
  <span class="slider round"></span>
Post
</label>
    </div>
</>
  )
}

export default App
