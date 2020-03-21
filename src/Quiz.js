import React, { Component } from "react";
import IntervalExerciseController  from './IntervalExerciseController.js'
import PropTypes from "prop-types";

class Quiz extends Component {

    render() {
        return <IntervalExerciseController
            interval={this.props.interval}
            possibleAnswers={this.props.possibleAnswers}
            submittedAnswers={this.props.submittedAnswers}
            onAnswerClick={this.props.onAnswerClick}
        />
    }
}

Quiz.propTypes = {
    interval: PropTypes.object, // Teoria interval
    possibleAnswers: PropTypes.arrayOf(PropTypes.object), // Array of Teoria intervals
    submittedAnswers: PropTypes.arrayOf(PropTypes.string), // Array of string ids  of Teoria intervals
    onAnswerClick: PropTypes.func,
}

export default Quiz
