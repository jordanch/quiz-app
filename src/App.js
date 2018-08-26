import React from "react"
import QuestionContainer from "./containers/Question.container"
import ResultsContainer from "./containers/Results.container"
import StartContainer from "./containers/Start.container"
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect
} from "react-router-dom"
import { Provider } from "react-redux"
import "./App.css"
import PropTypes from "prop-types"

function App(props) {
	const { store } = props
	return (
		<Provider store={store}>
			<Router>
				<div className="app">
					<div className="screen-container">
						<Switch>
							<Route
								path="/"
								exact={true}
								component={StartContainer}
							/>
							<Route
								path="/quiz"
								render={({ history }) => {
									const state = store.getState()
									if (state.quizEntities.length === 0) {
										return <Redirect to="/" />
									}

									if (
										state.quizEntities.length === 10 &&
										state.quizEntities[9].userAnswer !== null
									) {
										return <Redirect to="/" />
									}

									return (
										<QuestionContainer
											cbAfterLastQuestion={() => history.push("/score")}
										/>
									)
								}}
							/>
							<Route path="/score" component={ResultsContainer} />
						</Switch>
					</div>
				</div>
			</Router>
		</Provider>
	)
}

App.propTypes = {
	store: PropTypes.object.isRequired
}

export default App
