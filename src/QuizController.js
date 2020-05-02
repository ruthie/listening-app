import React, { Component } from 'react';

import Quiz from './Quiz.js'
import QuizCompleted from './QuizCompleted.js'

const NUM_EXERCISES = 2;

class QuizController extends Component {
    constructor() {
        super()

        this.state = {
            numExercises: NUM_EXERCISES,
            finished: false,
            numFirstTry: 0,
        }

        this.handleFinishClick = this.handleFinishClick.bind(this)
        this.handleAgainClick = this.handleAgainClick.bind(this)
        this.resetQuiz = this.resetQuiz.bind(this)
    }

    handleFinishClick(numFirstTry) {
        this.setState({
            finished: true,
            numFirstTry: numFirstTry,
        })
    }

    resetQuiz() {
        this.setState({
            numExercises: NUM_EXERCISES,
            finished: false,
            numFirstTry: 0,
        })
    }

    handleAgainClick() {
        this.resetQuiz()
    }

    render() {
        const renderedComponent = (
            this.state.finished
                ? (
                    <QuizCompleted
                        onAgainClick={this.handleAgainClick}
                        onHomeClick={this.handleHomeClick}
                        numExercises={this.state.numExercises}
                        numFirstTry={this.state.numFirstTry}
                    />
                )
                : (
                    <Quiz
                        numExercises={this.state.numExercises}
                        onFinishClick={this.handleFinishClick}
                    />
                )
        )

        return renderedComponent
    }
}

export default QuizController
