import React from "react"
import Typography from "@material-ui/core/Typography"
import { withStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import Add from "@material-ui/icons/Add"

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
  const { classes } = props

  return (
    <div className={classes.container}>
      <div className={classes.score}>
        <Typography variant="headline" gutterBottom align="center">
          You scored
        </Typography>

        <Typography variant="headline" gutterBottom align="center">
          3 / 10
        </Typography>
      </div>

      <div className={classes.results}>

        <div className={classes.resultRow}>
          <Add className={classes.resultRowItemIcon} />
          <div className={classes.resultRowItemText}>
            <Typography variant="body2" align="left">
              {"Question here... what is the queen of England's shoe size?"}
            </Typography>
          </div>
        </div>

        <div className={classes.resultRow}>
          <Add className={classes.resultRowItemIcon} />
          <div className={classes.resultRowItemText}>
            <Typography variant="body2" align="left">
              {"Question here... what is the queen of England's shoe size?"}
            </Typography>
          </div>
        </div>
        <div className={classes.resultRow}>
          <Add className={classes.resultRowItemIcon} />
          <div className={classes.resultRowItemText}>
            <Typography variant="body2" align="left">
              {"Question here... what is the queen of England's shoe size?"}
            </Typography>
          </div>
        </div>
        <div className={classes.resultRow}>
          <Add className={classes.resultRowItemIcon} />
          <div className={classes.resultRowItemText}>
            <Typography variant="body2" align="left">
              {"Question here... what is the queen of England's shoe size?"}
            </Typography>
          </div>
        </div>
        <div className={classes.resultRow}>
          <Add className={classes.resultRowItemIcon} />
          <div className={classes.resultRowItemText}>
            <Typography variant="body2" align="left">
              {"Question here... what is the queen of England's shoe size?"}
            </Typography>
          </div>
        </div>


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
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Results)
