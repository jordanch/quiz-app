import React from "react"
import Start from "./components/Start"
import Question from "./components/Question"
import { Route } from "react-router-dom"
import "./App.css"

function App() {
  return (
    <div className="app">
      <div className="screen-container">
        <Route path="/" component={Start} exact={true}/>
        <Route path="/quiz" component={Question} />
      </div>
    </div>
  )
}

export default App
