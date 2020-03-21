import React, { Component } from "react";
import PropTypes from "prop-types";
import IntervalExercise from "./IntervalExercise.js";


class IntervalExerciseController extends Component {
    render() {
        return <IntervalExercise
            interval={this.props.interval}
            possibleAnswers={this.props.possibleAnswers}
            submittedAnswers={this.props.submittedAnswers}
            onAnswerClick={this.props.onAnswerClick}
        />
    }
}

IntervalExerciseController.propTypes = {
    interval: PropTypes.object, // Teoria interval
    possibleAnswers: PropTypes.arrayOf(PropTypes.object), // Array of Teoria intervals
    submittedAnswers: PropTypes.arrayOf(PropTypes.string), // Array of string ids  of Teoria intervals
    onAnswerClick: PropTypes.func,
}

export default IntervalExerciseController
