import React from "react"
import classNames from "classnames"
import Typography from "@material-ui/core/Typography"
import { withStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import Add from "@material-ui/icons/Add"
import Remove from "@material-ui/icons/Remove"
import { isUserCorrect } from "../util/quizEntity"

const styles = (theme) => ({
	container: {
		width: "100%",
		height: "100%",
		backgroundColor: "pink",
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
		padding: "10px 0",
		"&:first-child": {
			marginTop: "20px"
		}
	},
	resultsRowCorrect: {
		backgroundColor: "green",
		color: "white"
	},
	resultsRowIncorrect: {
		backgroundColor: "red"
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
		flexBasis: "20%"
	},
	resultRowItemText: {
		flexBasis: "80%"
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
						<div
							className={classNames(classes.resultRow, {
								[classes.resultsRowCorrect]: isUserAnswerCorrect,
								[classes.resultsRowIncorrect]: !isUserAnswerCorrect
							})}
							key={quizEntity.appId}
						>
							<div className={classes.resultRowAnswer}>
								{quizEntity.userAnswer === quizEntity.correctAnswer && (
									<Add className={classes.resultRowItemIcon} />
								)}

								{quizEntity.userAnswer !== quizEntity.correctAnswer && (
									<Remove className={classes.resultRowItemIcon} />
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
						</div>
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
