import thunkMiddleware from "redux-thunk"
import { createLogger } from "redux-logger"
import { createStore, applyMiddleware, compose } from "redux"
import quizApp from "../reducers/quiz_app.reducer"

const middleware = [thunkMiddleware]
const loggerMiddleware = createLogger()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

if (process.env.TEST_ENV !== "true") {
	middleware.push(loggerMiddleware)
}

export default createStore(
	quizApp,
	composeEnhancers(applyMiddleware(...middleware))
)
