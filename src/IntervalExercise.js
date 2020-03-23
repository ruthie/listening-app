import React, { Component } from "react";
import PropTypes from "prop-types";
import Tone from "tone";
import Teoria from "teoria";

import './AnswerButton.css';

function AnswerButton({ text, onClick, value, color }) {
    return (
        <button value={value} onClick={onClick} className={`answer-button ${color}`}>{text}</button>
    )
}

function PlaySoundButton({ onClick }) {
    return (
        <button onClick={onClick}> Play Sound </button>
    )
}

const friendlyIntervalNames = {
    'm2': 'Minor 2nd',
    'M2': 'Major 2nd',
    'm3': 'Minor 3rd',
    'M3': 'Major 3rd',
    'P4': 'Perfect 4th',
    'd5': 'Diminished 5th',
    'P5': 'Perfect 5th',
    'm6': 'Minor 6th',
    'M6': 'Major 6th',
    'm7': 'Minor 7th',
    'M7': 'Major 7th'
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
                {possibleAnswers.map(x => {
                    let intervalName = x.toString()
                    var intervalFriendlyName = friendlyIntervalNames[intervalName]

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
                        />
                    )
                })}
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
