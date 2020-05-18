import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { INTERVAL_INFO } from './utils.js'

import './AnswerButtons.css';

function AnswerButton({ text, onClick, value, color, layoutClassName }) {
    return (
        <button
            value={value}
            onClick={onClick}
            className={`answer-button ${color} ${layoutClassName}`}
        >
            {text}
        </button>
    )
}

AnswerButton.propTypes = {
    text: PropTypes.string,
    value: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
    layoutClassName: PropTypes.string,
}

class AnswerButtons extends Component {
    render() {
        return (
            <div className="answer-buttons-container">
                {Object.entries(INTERVAL_INFO).map(([intervalName, displayInfo]) => {
                    const intervalFriendlyName = displayInfo.friendlyName

                    let color = 'white'
                    if (this.props.submittedAnswers.includes(intervalName)) {
                        color = intervalName === this.props.correctAnswer.toString() ? 'green' : 'red'
                    }

                    return (
                        <AnswerButton
                            key={intervalName}
                            text={intervalFriendlyName}
                            value={intervalName}
                            color={color}
                            onClick={this.props.onAnswerClick}
                            layoutClassName={
                                INTERVAL_INFO[intervalName].layoutClassName
                            }
                        />
                    )
                })}
            </div>
        )
    }
}

AnswerButtons.propTypes = {
    correctAnswer: PropTypes.string,
    submittedAnswers: PropTypes.arrayOf(PropTypes.string),
    onAnswerClick: PropTypes.func,
}

export default AnswerButtons
