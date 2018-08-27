import React from "react"
import Typography from "@material-ui/core/Typography"
import { withStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import Card from "@material-ui/core/Card"
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
	button: {
		margin: theme.spacing.unit
	},
	buttonLink: {
		textDecoration: "none",
		color: "white"
	}
})

const Start = (props) => {
	const { classes, startQuiz, quizEntities, isFetchingData, history } = props

	return (
		<Card className={classes.container}>
			<Typography variant="headline" gutterBottom align="center">
				Welcome to the Trivia Challenge!
			</Typography>

			<Typography variant="body2" gutterBottom align="center">
				You will be presented with 10 True or False questions.
			</Typography>

			<Typography variant="body2" gutterBottom align="center">
				Can you score 100%?
			</Typography>

			<Button
				variant="contained"
				color="primary"
				className={classes.button}
				onClick={() => {
					startQuiz()
					history.push('/quiz')
				}}
				disabled={isFetchingData}
			>
				{!isFetchingData && quizEntities.length > 0 && <span>BEGIN</span>}
				{isFetchingData && <span>Loading...</span>}
			</Button>
		</Card>
	)
}

Start.propTypes = {
	classes: PropTypes.object.isRequired,
	startQuiz: PropTypes.func.isRequired,
	quizEntities: PropTypes.array.isRequired,
	isFetchingData: PropTypes.bool.isRequired,
	history: PropTypes.object.isRequired
}

export default withStyles(styles)(Start)
