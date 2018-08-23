import React from "react"
import Start from "./components/Start"
import Question from "./components/Question"
import Results from "./components/Results"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import "./App.css"

function App() {
  return (
    <Router>
      <div className="app">
        <div className="screen-container">
          <Switch>
            <Route path="/" exact={true} component={Start} />
            <Route path="/quiz" component={Question} />
            <Route path="/score" component={Results} />
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App
