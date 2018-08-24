import thunkMiddleware from "redux-thunk"
import { createLogger } from "redux-logger"
import { createStore, applyMiddleware } from "redux"
import quizApp from "../reducers/quiz_app.reducer"

const middleware = [thunkMiddleware];
const loggerMiddleware = createLogger()

if (process.env.TEST_ENV === 'true') {
  middleware.push(loggerMiddleware)
}

export default createStore(
  quizApp,
  applyMiddleware(...middleware)
)
