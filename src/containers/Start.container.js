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
    const { store } = this.props
		store.dispatch(fetchQuizData())
  }

  render() {
    return <Start {...this.props}/>
  }

}

StartWrapperForDataSetup.propTypes = {
  store: PropTypes.object.isRequired,
  startQuiz: PropTypes.func.isRequired
}

const mapDispatchToProps = (dispatch) => {
  return {
    startQuiz: () => {
      dispatch(startQuiz())
    }
  }
}

const StartContainer = connect(null, mapDispatchToProps)(StartWrapperForDataSetup)

StartContainer.propTypes = {
	store: PropTypes.object.isRequired
}

export default StartContainer
