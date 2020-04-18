import React, { Component } from 'react';
import PropTypes from 'prop-types';

import AgainButton from './AgainButton.js'

class QuizCompleted extends Component {
    render() {
        const message = `You got ${this.props.numFirstTry} out of ${this.props.numExercises} on the first try!`;
        return (
            <div>
                <p>
                    {message}
                </p>
                <AgainButton onClick={this.props.onAgainClick} />
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
