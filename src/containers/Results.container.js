import { connect } from "react-redux"
import Results from "../components/Results"

const mapStateToProps = (state) => {
	return {
		quizEntities: state.quizEntities
	}
}

const ResultsContainer = connect(mapStateToProps)(Results)

export default ResultsContainer
