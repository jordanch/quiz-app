import React from "react"
import Typography from "@material-ui/core/Typography"
import { withStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"

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
		textDecoration: "none"
	}
})

const Start = (props) => {
	const { classes, startQuiz, quizEntities, isFetchingData } = props

	return (
		<div className={classes.container}>
			<Typography variant="headline" gutterBottom align="center">
				Welcome to the Trivia Challenge!
			</Typography>

			<Typography variant="body2" gutterBottom align="center">
				You will be presented with 10 True or False questions.
			</Typography>

			<Typography variant="body2" gutterBottom align="center">
				Can you score 100%?
			</Typography>

			<Link to="/quiz" className={classes.buttonLink}>
				<Button
					variant="contained"
					color="primary"
					className={classes.button}
          onClick={startQuiz}
          disabled={isFetchingData}
				>
					{!isFetchingData && quizEntities.length > 0 && <span>BEGIN</span>}
					{isFetchingData && <span>Loading...</span>}
				</Button>
			</Link>
		</div>
	)
}

Start.propTypes = {
	classes: PropTypes.object.isRequired,
	startQuiz: PropTypes.func.isRequired,
	quizEntities: PropTypes.array.isRequired,
	isFetchingData: PropTypes.bool.isRequired
}

export default withStyles(styles)(Start)
