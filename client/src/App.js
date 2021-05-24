import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import "./App.css"

import Header from "./Components/Header/header"
import Home from "./Pages/Home/Home"
import Data from "./Pages/Data/Data"

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={() => <Home />} />

          <Route path="/data" exact component={() => <Data />} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
