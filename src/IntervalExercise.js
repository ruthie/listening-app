import React, { Component } from "react";
import PropTypes from "prop-types";
import Tone from "tone";
import Teoria from "teoria";

import './AnswerButton.css';
import './PlayButton.css';
import { MdVolumeUp } from 'react-icons/md';

function AnswerButton({ text, onClick, value, color, row, column }) {
    return (
        <button
            value={value}
            onClick={onClick}
            className={`answer-button ${color}`}
            style={{gridColumn: column, gridRow: row}}
        >
            {text}
        </button>
    )
}

function PlaySoundButton({ onClick }) {
    return (
        <button onClick={onClick} className='play-button'>
            <MdVolumeUp className='play-button-sound-icon'/>
            PLAY INTERVAL
        </button>
    )
}

const intervalDisplayInfo = {
    'm2': {
        friendlyName: 'Minor 2nd',
        row: 1,
        column: 2
    },
    'M2': {
        friendlyName: 'Major 2nd',
        row: 1,
        column: 1,
    },
    'm3': {
        friendlyName: 'Minor 3rd',
        row: 2,
        column: 2,
    },
    'M3': {
        friendlyName: 'Major 3rd',
        row: 2,
        column: 1
    },
    'P4': {
        friendlyName: 'Perfect 4th',
        row: 3,
        column: 1
    },
    'd5': {
        friendlyName: 'Diminished 5th',
        row: 4,
        column: 2
    },
    'P5': {
        friendlyName: 'Perfect 5th',
        row: 4,
        column: 1,
    },
    'm6': {
        friendlyName: 'Minor 6th',
        row: 5,
        column: 2
    },
    'M6': {
        friendlyName: 'Major 6th',
        row: 5,
        column: 1,
    },
    'm7': {
        friendlyName: 'Minor 7th',
        row: 6,
        column: 2
    },
    'M7': {
        friendlyName: 'Major 7th',
        row: 6,
        column: 1
    }
}

class IntervalExercise extends Component {
    constructor() {
        super()
        this.playInterval = this.playInterval.bind(this)
    }


    playInterval() {
        var synth = new Tone.Synth().toMaster()
        var bottomNoteName = 'C4'
        var topNote = Teoria.interval(
            Teoria.note(bottomNoteName), this.props.interval
        )
        var topNoteName = topNote.name() + topNote.accidental() + topNote.octave()

        synth.triggerAttackRelease(bottomNoteName, '4n')
        synth.triggerAttackRelease(topNoteName, '4n', Tone.now() + Tone.Time('4n'))
    }

    render() {
        const { interval, possibleAnswers, submittedAnswers, onAnswerClick } = this.props;

        return (
            <div>
                <PlaySoundButton onClick={this.playInterval}/>
                <p className='instructions-text'>Identify the interval</p>
                <div className="answer-buttons-container">
                    {possibleAnswers.map(x => {
                        let intervalName = x.toString()
                        var intervalFriendlyName = intervalDisplayInfo[intervalName].friendlyName

                        var color = 'white'
                        if (submittedAnswers.includes(x.toString())) {
                            color = intervalName === interval.toString() ? 'green' : 'red'
                        }

                        return (
                            <AnswerButton
                                key={intervalName}
                                text={intervalFriendlyName}
                                value={intervalName}
                                color={color}
                                onClick={onAnswerClick}
                                row={intervalDisplayInfo[intervalName].row}
                                column={intervalDisplayInfo[intervalName].column}
                            />
                        )
                    })}
                </div>
            </div>
        )
    }
}

IntervalExercise.propTypes = {
    interval: PropTypes.object, // Teoria interval
    possibleAnswers: PropTypes.arrayOf(PropTypes.object), // Array of Teoria intervals
    submittedAnswers: PropTypes.arrayOf(PropTypes.string), // Array of string ids  of Teoria intervals
    onAnswerClick: PropTypes.func,
}

export default IntervalExercise
