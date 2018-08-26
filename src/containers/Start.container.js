import React, { Component } from "react"
import { connect } from "react-redux"
import Start from "../components/Start"
import { startQuiz } from "../actions/quiz_entities.actions"
import { fetchQuizData } from "../actions/quiz_entities.actions"
import PropTypes from "prop-types"

class StartWrapperForDataSetup extends Component {
	constructor(props) {
		super(props)
	}

	componentDidMount() {
		const { fetchApiData } = this.props
		fetchApiData()
	}

	render() {
		return <Start {...this.props} />
	}
}

StartWrapperForDataSetup.propTypes = {
  startQuiz: PropTypes.func.isRequired,
  quizEntities: PropTypes.array.isRequired,
  fetchApiData: PropTypes.func.isRequired,
  isFetchingData: PropTypes.bool.isRequired
}

const mapStateToProps = (state) => {
	return {
    quizEntities: state.quizEntities,
    isFetchingData: state.isFetchingData
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		startQuiz: () => dispatch(startQuiz()),
    fetchApiData: () => dispatch(fetchQuizData())
	}
}

const StartContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(StartWrapperForDataSetup)

export default StartContainer
