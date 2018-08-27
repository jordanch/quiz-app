import { connect } from "react-redux"
import Question from "../components/Question"
import { answerQuizEntity } from "../actions/quiz_entities.actions"

const mapStateToProps = (state) => {
	return {
		currentQuizEntityIndex: state.currentQuizEntityIndex,
		quizEntities: state.quizEntities
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		answerQuizEntity: (quizEntityIndex, userAnswer) => {
			dispatch(answerQuizEntity(quizEntityIndex, userAnswer))
		}
	}
}

const QuestionContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(Question)

export default QuestionContainer
