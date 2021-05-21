import React from "react"

function Data() {
  return (
    <>
      <h4 className="topic">CCMS</h4>
      <form action="">
        <div className="row">
          <div className="col-25"></div>
          <div className="col-75">
            <input
              type="text"
              id="fname"
              name="firstname"
              placeholder="Title"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-25"></div>
          <div className="col-75">
            <input type="text" id="lname" placeholder="Author Name" />
          </div>
        </div>
        <div className="row">
          <div className="col-25"></div>
          <div className="col-75">
            <textarea
              id="content"
              name="subject"
              placeholder="Content"
              style={{ height: "200px" }}
            ></textarea>
            <br />
          </div>
          <div className="row">
            <input type="Date" placeholder="Date" />
          </div>
        </div>

        <label className="switch">
          <input type="checkbox" checked />
          <span className="slider round"></span>
          Post
        </label>
      </form>
    </>
  )
}

export default Data
