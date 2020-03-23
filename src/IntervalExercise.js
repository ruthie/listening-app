import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Tone from 'tone';
import Teoria from 'teoria';

import './AnswerButton.css';

function AnswerButton({ text, onClick, value, color }) {
    return (
        <button value={value} onClick={onClick} className={color}>{text}</button>
    )
}

function PlaySoundButton({ onClick }) {
    return (
        <button onClick={onClick}> Play Sound </button>
    )
}

class IntervalExercise extends Component {
    constructor() {
        super()
        this.playInterval = this.playInterval.bind(this)
    }


    playInterval() {
        let synth = new Tone.Synth().toMaster()
        let bottomNoteName = 'C4'
        let topNote = Teoria.interval(
            Teoria.note(bottomNoteName), this.props.interval
        )
        let topNoteName = topNote.name() + topNote.accidental() + topNote.octave()

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

                    let color = 'white'
                    if (submittedAnswers.includes(x.toString())) {
                        color = intervalName === interval.toString() ? 'green' : 'red'
                    }

                    return (
                        <AnswerButton
                            key={intervalName}
                            text={intervalName}
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

PlaySoundButton.propTypes = {
    onClick: PropTypes.func,
}

AnswerButton.propTypes = {
    key: PropTypes.string,
    text: PropTypes.string,
    value: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}

IntervalExercise.propTypes = {
    interval: PropTypes.object, // Teoria interval
    possibleAnswers: PropTypes.arrayOf(PropTypes.object), // Array of Teoria intervals
    submittedAnswers: PropTypes.arrayOf(PropTypes.string), // Array of string ids  of Teoria intervals
    onAnswerClick: PropTypes.func,
}

export default IntervalExercise
