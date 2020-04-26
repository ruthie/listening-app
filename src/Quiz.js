import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Teoria from 'teoria';

import IntervalExercise from './IntervalExercise.js'
import Button from './Button.js'
import './Quiz.css';

const POSSIBLE_INTERVALS = [
    Teoria.interval('m2'),
    Teoria.interval('M2'),
    Teoria.interval('m3'),
    Teoria.interval('M3'),
    Teoria.interval('P4'),
    Teoria.interval('d5'),
    Teoria.interval('P5'),
    Teoria.interval('m6'),
    Teoria.interval('M6'),
    Teoria.interval('m7'),
    Teoria.interval('M7'),
    // TODO: include octave

]

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

class Quiz extends Component {
    constructor() {
        super()

        this.state = {
            currentExercise: 0,
            interval: POSSIBLE_INTERVALS[getRandomInt(POSSIBLE_INTERVALS.length)],
            possibleAnswers: POSSIBLE_INTERVALS,
            submittedAnswers: [],
            numFirstTry: 0,
        }

        this.handleAnswerClick = this.handleAnswerClick.bind(this)
        this.handleContinueClick = this.handleContinueClick.bind(this)
        this.handleFinishClick = this.handleFinishClick.bind(this)
    }

    handleAnswerClick(e) {
        const submittedInterval = e.currentTarget.value

        if (
            // this is the first guess for this question
            this.state.submittedAnswers.length === 0
            // and it was correct
            && submittedInterval === this.state.interval.toString()
        ) {
            this.setState({
                numFirstTry: this.state.numFirstTry + 1,
            })
        }

        this.setState({
            submittedAnswers: this.state.submittedAnswers.concat([submittedInterval]),
        })
    }

    handleContinueClick() {
        this.setState({
            submittedAnswers: [],
            interval: POSSIBLE_INTERVALS[getRandomInt(POSSIBLE_INTERVALS.length)],
            currentExercise: this.state.currentExercise + 1,
        })
    }

    handleFinishClick() {
        this.props.onFinishClick(this.state.numFirstTry)

        // clear quiz state for next time
        this.setState({
            currentExercise: 0,
            interval: POSSIBLE_INTERVALS[getRandomInt(POSSIBLE_INTERVALS.length)],
            possibleAnswers: POSSIBLE_INTERVALS,
            submittedAnswers: [],
            numFirstTry: 0,
        })
    }

    render() {
        const questionCompleted = (
            // we've answered correctly
            this.state.submittedAnswers.includes(this.state.interval.toString())

        )
        const isLastExercise = (
            // and this is not the last exercise
            this.state.currentExercise === this.props.numExercises - 1
        )

        const button = (
            isLastExercise
                ? (
                    <Button
                        text="Finish"
                        onClick={this.handleFinishClick}
                        modifierClassName="finish-button"
                    />
                )
                : (
                    <Button
                        text="Continue"
                        onClick={this.handleContinueClick}
                        modifierClassName="continue-button"
                    />
                )
        )

        return (
            <div className="quiz">
                <IntervalExercise
                    interval={this.state.interval}
                    possibleAnswers={this.state.possibleAnswers}
                    submittedAnswers={this.state.submittedAnswers}
                    onAnswerClick={this.handleAnswerClick}
                />
                {questionCompleted && button}
            </div>
        )
    }
}


Quiz.propTypes = {
    numExercises: PropTypes.number,
    onFinishClick: PropTypes.func,
}

export default Quiz
