import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

const INTERVAL_INFO = {
    m2: {
        friendlyName: 'Minor 2nd',
        layoutClassName: 'minor2',
    },
    M2: {
        friendlyName: 'Major 2nd',
        layoutClassName: 'major2',
    },
    m3: {
        friendlyName: 'Minor 3rd',
        layoutClassName: 'minor3',
    },
    M3: {
        friendlyName: 'Major 3rd',
        layoutClassName: 'major3',
    },
    P4: {
        friendlyName: 'Perfect 4th',
        layoutClassName: 'perfect4',
    },
    d5: {
        friendlyName: 'Diminished 5th',
        layoutClassName: 'diminished5',
    },
    P5: {
        friendlyName: 'Perfect 5th',
        layoutClassName: 'perfect5',
    },
    m6: {
        friendlyName: 'Minor 6th',
        layoutClassName: 'minor6',
    },
    M6: {
        friendlyName: 'Major 6th',
        layoutClassName: 'major6',
    },
    m7: {
        friendlyName: 'Minor 7th',
        layoutClassName: 'minor7',
    },
    M7: {
        friendlyName: 'Major 7th',
        layoutClassName: 'major7',
    },
}

export const POSSIBLE_INTERVALS = Object.keys(INTERVAL_INFO)

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
