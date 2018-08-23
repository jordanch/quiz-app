import React from "react"
import Start from "./components/Start"
import Question from "./components/Question"
import Results from "./components/Results"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import "./App.css"
import { handleApiData } from "./data/transform"

import mockData from "./data/data.mock.json"
const massagedData = handleApiData(mockData).map((quizEntity, i) => ({
  ...quizEntity,
  userAnswer: i % 2 === 0 ? true : false
}))

function App() {
  return (
    <Router>
      <div className="app">
        <div className="screen-container">
          <Switch>
            <Route path="/" exact={true} component={Start} />
            <Route path="/quiz" component={Question} />
            <Route
              path="/score"
              render={() => <Results quizEntities={massagedData} />}
            />
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App
