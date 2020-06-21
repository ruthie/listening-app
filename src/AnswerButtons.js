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

export class IntervalAnswerButtons extends Component {
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

IntervalAnswerButtons.propTypes = {
    correctAnswer: PropTypes.string,
    submittedAnswers: PropTypes.arrayOf(PropTypes.string),
    onAnswerClick: PropTypes.func,
}

export class SharpFlatAnswerButtons extends Component {
    render() {
        return (
            <div className="answer-buttons-container">
                {['flat', 'sharp'].map((direction) => {
                    let color = 'white'
                    if (this.props.submittedAnswers.includes(direction)) {
                        color = direction === this.props.correctAnswer.toString() ? 'green' : 'red'
                    }

                    return (
                        <AnswerButton
                            key={direction}
                            text={direction}
                            value={direction}
                            color={color}
                            onClick={this.props.onAnswerClick}
                            layoutClassName=""
                        />
                    )
                })}
            </div>
        )
    }
}

SharpFlatAnswerButtons.propTypes = {
    correctAnswer: PropTypes.string,
    submittedAnswers: PropTypes.arrayOf(PropTypes.string),
    onAnswerClick: PropTypes.func,
}
