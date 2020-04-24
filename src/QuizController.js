import React, { Component } from 'react';
import Teoria from 'teoria';

import Quiz from './Quiz.js'
import QuizCompleted from './QuizCompleted.js'

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

const NUM_EXERCISES = 10;

class QuizController extends Component {
    constructor() {
        super()

        this.state = {
            numExercises: NUM_EXERCISES,
            currentExercise: 0,
            interval: POSSIBLE_INTERVALS[getRandomInt(POSSIBLE_INTERVALS.length)],
            submittedAnswers: [],
            finished: false,
            numFirstTry: 0,
        }

        this.handleAnswerClick = this.handleAnswerClick.bind(this)
        this.handleContinueClick = this.handleContinueClick.bind(this)
        this.handleFinishClick = this.handleFinishClick.bind(this)
        this.handleAgainClick = this.handleAgainClick.bind(this)
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
        this.setState({
            finished: true,
        })
    }

    handleAgainClick() {
        this.setState({
            numExercises: NUM_EXERCISES,
            currentExercise: 0,
            interval: POSSIBLE_INTERVALS[getRandomInt(POSSIBLE_INTERVALS.length)],
            submittedAnswers: [],
            finished: false,
            numFirstTry: 0,
        })
    }

    render() {
        const renderedComponent = (
            this.state.finished
                ? (
                    <QuizCompleted
                        onAgainClick={this.handleAgainClick}
                        numExercises={this.state.numExercises}
                        numFirstTry={this.state.numFirstTry}
                    />
                )
                : (
                    <Quiz
                        interval={this.state.interval}
                        possibleAnswers={POSSIBLE_INTERVALS}
                        submittedAnswers={this.state.submittedAnswers}
                        onAnswerClick={this.handleAnswerClick}
                        numExercises={this.state.numExercises}
                        currentExercise={this.state.currentExercise}
                        onContinueClick={this.handleContinueClick}
                        onFinishClick={this.handleFinishClick}
                    />
                )
        )

        return renderedComponent
    }
}

export default QuizController
