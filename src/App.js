import React, { Component } from "react"
import QuestionContainer from "./containers/Question.container"
import ResultsContainer from "./containers/Results.container"
import StartContainer from "./containers/Start.container"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { Provider } from "react-redux"
import "./App.css"
import { fetchQuizData } from "./actions/quiz_entities.actions"
import PropTypes from "prop-types"

class App extends Component {
  constructor(props) {
    super(props)
  }

  async componentDidMount() {
    // TODO: error handling.
    const { store } = this.props;
    store.dispatch(fetchQuizData())
  }

  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <Router>
          <div className="app">
            <div className="screen-container">
              <Switch>
                <Route path="/" exact={true} component={StartContainer} />
                <Route
                  path="/quiz"
                  render={({ history }) => (
                    <QuestionContainer
                      cbAfterLastQuestion={() => history.push("/score")}
                    />
                  )}
                />
                <Route path="/score" component={ResultsContainer} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    )
  }
}

App.propTypes = {
  store: PropTypes.object.isRequired
}

export default App
