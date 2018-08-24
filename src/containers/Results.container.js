import { connect } from 'react-redux'
import Results from '../components/Results'

const mapStateToProps = (state) => {
  return {
    quizEntities: state.quizEntities
  }
}

// const mapDispatchToProps = (dispatch, ownProps) => {
//   return {
//     // onClick: () => {
//     //   dispatch(setVisibilityFilter(ownProps.filter))
//     // }
//   }
// }

const ResultsContainer = connect(
  mapStateToProps
)(Results)

export default ResultsContainer