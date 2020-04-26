import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from './Button.js'

class QuizCompleted extends Component {
    render() {
        const message = `You got ${this.props.numFirstTry} out of ${this.props.numExercises} on the first try!`;
        return (
            <div>
                <p>
                    {message}
                </p>
                <Button
                    className="again-button"
                    onClick={this.props.onAgainClick}
                >
                    Try again
                </Button>
            </div>
        )
    }
}

QuizCompleted.propTypes = {
    onAgainClick: PropTypes.func,
    numFirstTry: PropTypes.number,
    numExercises: PropTypes.number,
}

export default QuizCompleted
