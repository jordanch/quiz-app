import { connect } from "react-redux"
import Start from "../components/Start"
import { startQuiz } from "../actions/quiz_entities.actions"

// const mapStateToProps = (state) => {
//   return {
//     currentQuizEntityIndex: state.currentQuizEntityIndex,
//     quizEntities: state.quizEntities
//   }
// }

const mapDispatchToProps = (dispatch) => {
  return {
    startQuiz: () => {
      dispatch(startQuiz())
    }
  }
}

const StartContainer = connect(null, mapDispatchToProps)(Start)

export default StartContainer
