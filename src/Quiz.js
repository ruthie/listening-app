import React, { Component } from 'react';
import PropTypes from 'prop-types';

import IntervalExercise from './IntervalExercise.js'
import ContinueButton from './ContinueButton.js'
import './Quiz.css';


class Quiz extends Component {
    render() {
        const quizCompleted = (
            // we've answered correctly
            this.props.submittedAnswers.includes(this.props.interval.toString())
            // and this is not the last exercise
            && this.props.currentExercise < this.props.numExercises - 1
        )

        return (
            <div className="quiz">
                <IntervalExercise
                    interval={this.props.interval}
                    possibleAnswers={this.props.possibleAnswers}
                    submittedAnswers={this.props.submittedAnswers}
                    onAnswerClick={this.props.onAnswerClick}
                />
                {quizCompleted && <ContinueButton onClick={this.props.onContinueClick} />}
            </div>
        )
    }
}


Quiz.propTypes = {
    interval: PropTypes.object, // Teoria interval
    possibleAnswers: PropTypes.arrayOf(PropTypes.object), // Array of Teoria intervals
    submittedAnswers: PropTypes.arrayOf(PropTypes.string), // ids  of Teoria intervals
    onAnswerClick: PropTypes.func,
    numExercises: PropTypes.number,
    currentExercise: PropTypes.number,
    onContinueClick: PropTypes.func,
}

export default Quiz
