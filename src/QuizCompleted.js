import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from './Button.js'
import './QuizCompleted.css'

class QuizCompleted extends Component {
    render() {
        const message = `You got ${this.props.numFirstTry} out of ${this.props.numExercises} on the first try!`;
        return (
            <div>
                <p>
                    {message}
                </p>
                <Button
                    modifierClassName="again-button"
                    text="Try Again"
                    onClick={this.props.onAgainClick}
                />
                <Button
                    modifierClassName="home-button"
                    text="Homepage"
                    onClick={this.props.onHomeClick}
                />
            </div>
        )
    }
}

QuizCompleted.propTypes = {
    onAgainClick: PropTypes.func,
    onHomeClick: PropTypes.func,
    numFirstTry: PropTypes.number,
    numExercises: PropTypes.number,
}

export default QuizCompleted
