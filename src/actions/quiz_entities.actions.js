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
		data: data
	}
}

export const START_QUIZ = "START_QUIZ"
export function startQuiz() {
	return { type: START_QUIZ }
}

export const ANSWER_QUIZENTITY = "ANSWER_QUIZENTITY"
/**
 * Create an action for answering a QuizEntity's question.
 *
 * @export
 * @param {number} entityIndex
 * @param {boolean} answer
 */
export function answerQuizEntity(entityIndex, answer) {
	return {
		type: ANSWER_QUIZENTITY,
		data: {
			quizEntityIndex: entityIndex,
			userAnswer: answer
		}
	}
}
