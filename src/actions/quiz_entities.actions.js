import { handleApiData } from "../data/transform"
import { getQuizData } from "../data/api_requests"

export function fetchQuizData() {
  return function(dispatch) {
    dispatch(requestQuizData())
    return getQuizData()
      .then((data) => dispatch(receiveQuizData(handleApiData(data))))
      .catch((err) => {
        // TODO: handle error.
      })
  }
}

export const REQUEST_QUIZ_DATA = "REQUEST_QUIZ_DATA"
export function requestQuizData() {
  return {
    type: REQUEST_QUIZ_DATA
  }
}

export const RECEIVE_QUIZ_DATA = "RECEIVE_QUIZ_DATA"
export function receiveQuizData(data) {
  return {
    type: RECEIVE_QUIZ_DATA,
    quizEntities: data
  }
}
