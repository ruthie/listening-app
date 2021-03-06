import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from './Button.js'
import './Quiz.css';


class Quiz extends Component {
    constructor(props) {
        super(props)

        this.state = {
            currentExercise: 0,
            exerciseInfo: this.props.questionGenerator(),
            submittedAnswers: [],
            numFirstTry: 0,
        }

        this.handleAnswerClick = this.handleAnswerClick.bind(this)
        this.handleContinueClick = this.handleContinueClick.bind(this)
        this.handleFinishClick = this.handleFinishClick.bind(this)
    }

    handleAnswerClick(e) {
        const submittedAnswer = e.currentTarget.value

        if (
            // this is the first guess for this question
            this.state.submittedAnswers.length === 0
            // and it was correct
            && submittedAnswer === this.state.exerciseInfo.answer
        ) {
            this.setState({
                numFirstTry: this.state.numFirstTry + 1,
            })
        }

        this.setState({
            submittedAnswers: this.state.submittedAnswers.concat([submittedAnswer]),
        })
    }

    handleContinueClick() {
        this.setState({
            submittedAnswers: [],
            exerciseInfo: this.props.questionGenerator(),
            currentExercise: this.state.currentExercise + 1,
        })
    }

    handleFinishClick() {
        this.props.onFinishClick(this.state.numFirstTry)

        // clear quiz state for next time
        this.setState({
            currentExercise: 0,
            exerciseInfo: this.props.questionGenerator(),
            submittedAnswers: [],
            numFirstTry: 0,
        })
    }

    render() {
        const questionCompleted = (
            // we've answered correctly
            this.state.submittedAnswers.includes(this.state.exerciseInfo.answer)
        )
        const isLastExercise = (
            // and this is not the last exercise
            this.state.currentExercise === this.props.numExercises - 1
        )

        return (
            <div className="quiz content max-width">
                <this.props.exerciseClass
                    answer={this.state.exerciseInfo.answer}
                    exerciseInfo={this.state.exerciseInfo}
                    submittedAnswers={this.state.submittedAnswers}
                    onAnswerClick={this.handleAnswerClick}
                />
                {questionCompleted && (
                    isLastExercise ? (
                        <Button
                            onClick={this.handleFinishClick}
                            className="finish-button"
                        >
                            Finish
                        </Button>
                    ) : (
                        <Button
                            onClick={this.handleContinueClick}
                            className="continue-button"
                        >
                            Continue
                        </Button>
                    ))}
            </div>
        )
    }
}


Quiz.propTypes = {
    numExercises: PropTypes.number,
    onFinishClick: PropTypes.func,

    /* ExerciseClass and questionGenerator
    *  The questionGenerator function needs to return an object that has
    *  an answer key and any additional keys needed by the exercise class
    *  For  example, for identifying intervals, the exercise needs to know
    *  the correct answer, e.g. a fifth, but also needs to know what note to
    *  start playing  on, so the object returned by the questionGenerator might
    *  look like { answer: 'P5', bottomNote: 'C4'}
    */
    // disabling eslint for the following line because eslint can't tell
    // that exerciseClass is actually used
    exerciseClass: PropTypes.elementType, // eslint-disable-line
    questionGenerator: PropTypes.func,
}

export default Quiz
