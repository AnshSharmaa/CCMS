
import './App.css';
import React from 'react';

function App() {
  return (
    <>
    <div className="App">
    <h1 className="heading">CCMS</h1>
    <h4 className="create">Create/ All data</h4>
    <h3>Form</h3>
    <form className="form">
    <input type="text" placeholder="Title"  className="title"/><br />
    <input type="text" placeholder="Author Name" className="author" /><br />
    <input type="text" placeholder="Content" className="content" /><br />
    <input type="date" placeholder="Date" className="date"/><br />
    

    <div>
    <label class="switch">
  <input type="checkbox" />
  <span class="slider round"></span>
Post
</label> <pre>  Post</pre>
</div>
</form>
    <h3 className="heading2">Form</h3>
    <form className="form2">
    <input type="text" placeholder="Name"  className="name"/><br />
    <input type="text" placeholder="Designation" className="designation" /><br />
    <input type="text" placeholder="Content" className="content2" /><br />
    <input type="file" accept="image/*" className="image"/><br />
    <div>
    <label class="switch">
  <input type="checkbox" />
  <span class="slider round"></span>

</label><pre>  Profile</pre>
</div>
    </form>
    <div className="details">
      <h3>Details</h3>
      <h5>No of post:<input type="number" value="0"/></h5>
      <h5>No of profiles:<input type="number" value="0"/></h5>
    </div>
</div>
</>
   ) ;

};

export default App;
