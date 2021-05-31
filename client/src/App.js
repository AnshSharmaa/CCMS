import React from "react"
import Home from "./Pages/Home/Home"
import Data from "./Pages/Data/Data"
import { Route, BrowserRouter as Router, Switch } from "react-router-dom"

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/data" exact component={() => <Data />} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
