import React from "react"
import Typography from "@material-ui/core/Typography"
import { withStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import PropTypes from "prop-types"

const styles = (theme) => ({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "orange",
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
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  button: {
    margin: theme.spacing.unit
  }
})

const Question = (props) => {
  const { classes, question } = props

  return (
    <div className={classes.container}>
      <Typography variant="headline" gutterBottom align="center">
        {"Category"}
      </Typography>

      <div className={classes.questionBox}>
        <Typography variant="body2" gutterBottom align="center">
          {"Question here... what is the queen of England's shoe size?"}
        </Typography>
      </div>

      <div className={classes.answerContainer}>
        <Button variant="contained" color="secondary" className={classes.button}>
          FALSE
        </Button>
        <Button variant="contained" color="primary" className={classes.button}>
          TRUE
        </Button>
      </div>

      <Typography variant="body2" gutterBottom align="center">
        {"1 of 10"}
      </Typography>
    </div>
  )
}

Question.propTypes = {
  classes: PropTypes.object.isRequired,
  questions: PropTypes.object.isRequired
}

export default withStyles(styles)(Question)
