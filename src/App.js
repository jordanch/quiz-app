import React, { Component } from "react"
import Start from "./components/Start"
import Question from "./components/Question"
import ResultsContainer from "./containers/Results.container"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { Provider } from "react-redux"
import store from "./store/quiz_app.store"
import "./App.css"
import { fetchQuizData } from "./actions/quiz_entities.actions"

class App extends Component {
  constructor(props) {
    super(props)
  }

  async componentDidMount() {
    // TODO: error handling.
    store.dispatch(fetchQuizData())
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="app">
            <div className="screen-container">
              <Switch>
                <Route path="/" exact={true} component={Start} />
                <Route path="/quiz" component={Question} />
                <Route path="/score" render={() => <ResultsContainer />} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App
