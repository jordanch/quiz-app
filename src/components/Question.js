import React from "react"
import Typography from "@material-ui/core/Typography"
import { withStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import PropTypes from "prop-types"

const styles = (theme) => ({
	container: {
		width: "100%",
		height: "100%",
		backgroundColor: "white",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "space-around"
	},
	questionBox: {
		border: "1px solid black",
		width: "80%",
		padding: "20px 10px"
	},
	answerContainer: {
		display: "flex",
		alignItems: "center",
		justifyContent: "space-around"
	},
	button: {
		margin: theme.spacing.unit
	}
})

const Question = (props) => {
	const {
		classes,
		quizEntities,
		currentQuizEntityIndex,
		answerQuizEntity,
		cbAfterLastQuestion
	} = props

	// TODO: is this an efficient way of transitioning to /score route when last question answered?
	// I'd like to get this logic out of this component. it has to know about /score and logic for last question
	const quizEntitiesLength = quizEntities.length
	const current = quizEntities[currentQuizEntityIndex]
	const { category, question } = current

	function shouldCallLastQuestionCb(currentIndex) {
		if (currentIndex + 1 === quizEntitiesLength) {
			cbAfterLastQuestion()
		}
	}

	return (
		<div className={classes.container}>
			<Typography variant="headline" gutterBottom align="center">
				{category}
			</Typography>

			<div className={classes.questionBox}>
				<Typography variant="body2" gutterBottom align="center">
					{question}
				</Typography>
			</div>

			<div className={classes.answerContainer}>
				<Button
					variant="contained"
					color="secondary"
					className={classes.button}
					onClick={() => {
						answerQuizEntity(currentQuizEntityIndex, false)
						shouldCallLastQuestionCb(currentQuizEntityIndex)
					}}
				>
					FALSE
				</Button>
				<Button
					variant="contained"
					color="primary"
					className={classes.button}
					onClick={() => {
						answerQuizEntity(currentQuizEntityIndex, true)
						shouldCallLastQuestionCb(currentQuizEntityIndex)
					}}
				>
					TRUE
				</Button>
			</div>

			<Typography variant="body2" gutterBottom align="center">
				{`${currentQuizEntityIndex + 1} of ${quizEntitiesLength}`}
			</Typography>
		</div>
	)
}

Question.propTypes = {
	classes: PropTypes.object.isRequired,
	// TODO: add shape of quizEntity.
	quizEntities: PropTypes.array.isRequired,
	currentQuizEntityIndex: PropTypes.number.isRequired,
	answerQuizEntity: PropTypes.func.isRequired,
	cbAfterLastQuestion: PropTypes.func.isRequired
}

export default withStyles(styles)(Question)
