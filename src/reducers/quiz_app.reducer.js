// import { combineReducers } from 'redux'
import {
    REQUEST_QUIZ_DATA,
    RECEIVE_QUIZ_DATA
} from '../actions/quiz_entities.actions'

const INITIAL_STATE = {
    isFetchingData: false,
    hasError: false,
    quizEntities: []
}

// TODO: error actions + reducers.
function quizEntities(state = INITIAL_STATE, action) {
  switch (action.type) {
    case REQUEST_QUIZ_DATA:
      return {
          ...state,
          isFetchingData: true
      }
    case RECEIVE_QUIZ_DATA:
      return {
          ...state,
          quizEntities: action.quizEntities,
          isFetchingData: false,
          hasError: false
      }
    default:
      return state
  }
}

const quizApp = quizEntities

export default quizApp