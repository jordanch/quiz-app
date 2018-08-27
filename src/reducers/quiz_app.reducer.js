import {
	REQUEST_QUIZ_DATA,
	RECEIVE_QUIZ_DATA,
	START_QUIZ,
	ANSWER_QUIZENTITY
} from "../actions/quiz_entities.actions"

const INITIAL_STATE = {
	isFetchingData: false,
	hasError: false,
	quizEntities: [],
	currentQuizEntityIndex: null
}

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
				quizEntities: action.data,
				isFetchingData: false,
				hasError: false
			}
		case START_QUIZ:
			return {
				...state,
				currentQuizEntityIndex: 0
			}
		case ANSWER_QUIZENTITY: {
			// avoid 'no-case-declarations' rule with block scope.
			const { userAnswer, quizEntityIndex } = action.data
			const quizEntity = Object.assign(
				{},
				state.quizEntities[quizEntityIndex],
				{
					userAnswer
				}
			)
			const collectionCopy = state.quizEntities.slice()
			collectionCopy.splice(quizEntityIndex, 1, quizEntity)

			return {
				...state,
				quizEntities: collectionCopy,
				currentQuizEntityIndex:
					state.currentQuizEntityIndex + 1 < state.quizEntities.length
						? state.currentQuizEntityIndex + 1
						: state.currentQuizEntityIndex
			}
		}
		default:
			return state
	}
}

const quizApp = quizEntities

export default quizApp
