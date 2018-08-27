import React from "react"
import classNames from "classnames"
import Typography from "@material-ui/core/Typography"
import { withStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import Done from "@material-ui/icons/Done"
import Clear from "@material-ui/icons/Clear"
import Card from '@material-ui/core/Card';
import { isUserCorrect } from "../util/quiz_entity"

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
	score: {
		borderBottom: "1px solid black",
		width: "100%"
	},
	results: {
		overflowY: "scroll"
	},
	resultRow: {
    margin: "20px 0",
		padding: "10px 0",
		"&:first-child": {
			marginTop: "20px"
		}
	},
	resultRowAnswer: {
		display: "flex",
		alignItems: "center",
		margin: "0 0 15px 0"
	},
	resultRowAnswerDetails: {
		display: "flex",
		alignItems: "center",
		justifyContent: "space-around",
		fontSize: "12px"
	},
	resultRowItemIcon: {
		flexBasis: "10%"
  },
  resultsRowItemIconCorrect: {
    color: "green"
  },
  resultsRowItemIconIncorrect: {
    color: "red"
  },
	resultRowItemText: {
    flexBasis: "90%",
    padding: "0 20px"
	},
	button: {
		margin: theme.spacing.unit
	},
	buttonLink: {
		textDecoration: "none"
	},
	icon: {
		margin: theme.spacing.unit,
		fontSize: 32
	}
})

const Results = (props) => {
	const { classes, quizEntities } = props

	return (
		<div className={classes.container}>
			<div className={classes.score}>
				<Typography variant="headline" gutterBottom align="center">
					You scored
				</Typography>

				<Typography variant="headline" gutterBottom align="center">
					{`${quizEntities.reduce(
						(acc, curr) => acc + (isUserCorrect(curr) ? 1 : 0),
						0
					)} of ${quizEntities.length}`}
				</Typography>
			</div>

			<div className={classes.results}>
				{quizEntities.map((quizEntity) => {
					const isUserAnswerCorrect = isUserCorrect(quizEntity)
					return (
						<Card
							className={classes.resultRow}
							key={quizEntity.appId}
						>
							<div className={classes.resultRowAnswer}>
								{quizEntity.userAnswer === quizEntity.correctAnswer && (
									<Done className={classNames(classes.resultRowItemIcon, classes.resultsRowItemIconCorrect)}/>
								)}

								{quizEntity.userAnswer !== quizEntity.correctAnswer && (
									<Clear className={classNames(classes.resultRowItemIcon, classes.resultsRowItemIconIncorrect)} />
								)}

								<div className={classes.resultRowItemText}>
									<Typography
										variant="body2"
										align="left"
										className={
											isUserAnswerCorrect
												? classes.resultsRowCorrect
												: classes.resultsRowIncorrect
										}
									>
										{quizEntity.question}
									</Typography>
								</div>
							</div>

							<div className={classes.resultRowAnswerDetails}>
								<div>Your answer: {quizEntity.userAnswer.toString()}</div>
								<div>Correct answer: {quizEntity.correctAnswer.toString()}</div>
							</div>
						</Card>
					)
				})}
			</div>

			<Link to="/" className={classes.buttonLink}>
				<Button variant="contained" color="primary" className={classes.button}>
					PLAY AGAIN?
				</Button>
			</Link>
		</div>
	)
}

Results.propTypes = {
	classes: PropTypes.object.isRequired,
	quizEntities: PropTypes.array.isRequired
}

export default withStyles(styles)(Results)
