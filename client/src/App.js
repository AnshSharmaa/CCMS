import React from "react"
import Home from "./Pages/Home/Home"
import Data from "./Pages/Data/Data"
import Edit from "./Pages/Edit/Edit"
import { Route, BrowserRouter as Router, Switch } from "react-router-dom"

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/data" exact component={() => <Data />} />
          <Route path="/edit" exact component={() => <Edit />} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
