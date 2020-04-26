import React, { Component } from 'react';
import PropTypes from 'prop-types';

import IntervalExercise from './IntervalExercise.js'
import Button from './Button.js'
import './Quiz.css';


class Quiz extends Component {
    render() {
        const questionCompleted = (
            // we've answered correctly
            this.props.submittedAnswers.includes(this.props.interval.toString())

        )
        const isLastExercise = (
            // and this is not the last exercise
            this.props.currentExercise === this.props.numExercises - 1
        )

        const button = (
            isLastExercise
                ? (
                    <Button
                        text="Finish"
                        onClick={this.props.onFinishClick}
                        className="finish-button"
                    />
                )
                : (
                    <Button
                        text="Continue"
                        onClick={this.props.onContinueClick}
                        className="continue-button"
                    />
                )
        )

        return (
            <div className="quiz">
                <IntervalExercise
                    interval={this.props.interval}
                    possibleAnswers={this.props.possibleAnswers}
                    submittedAnswers={this.props.submittedAnswers}
                    onAnswerClick={this.props.onAnswerClick}
                />
                {questionCompleted && button}
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
    onFinishClick: PropTypes.func,
}

export default Quiz
