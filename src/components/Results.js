import React from "react"
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
  score: {},
  results: {},
  resultRow: {
    display: "flex",
    alignItems: "center",
    margin: "0 0 15px 0"
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
        {quizEntities.map((quizEntity) => (
          <div className={classes.resultRow} key={quizEntity.appId}>
            {quizEntity.userAnswer === quizEntity.correctAnswer && (
              <Add className={classes.resultRowItemIcon} />
            )}

            {quizEntity.userAnswer !== quizEntity.correctAnswer && (
              <Remove className={classes.resultRowItemIcon} />
            )}

            <div className={classes.resultRowItemText}>
              <Typography variant="body2" align="left">
                {quizEntity.question}
              </Typography>
            </div>
          </div>
        ))}
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
