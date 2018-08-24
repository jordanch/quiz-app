import thunkMiddleware from "redux-thunk"
import { createLogger } from "redux-logger"
import { createStore, applyMiddleware } from "redux"
import quizApp from "../reducers/quiz_app.reducer"

const loggerMiddleware = createLogger()

export default createStore(
  quizApp,
  applyMiddleware(thunkMiddleware, loggerMiddleware)
)
