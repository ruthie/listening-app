import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Tone from 'tone';
import Teoria from 'teoria';

import { MdVolumeUp } from 'react-icons/md';

import AnswerButtons, { POSSIBLE_INTERVALS } from './AnswerButtons.js';
import Button from './Button.js';
import './DownwardIntervalExercise.css';

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

export function generateRandomDownwardInterval() {
    return POSSIBLE_INTERVALS[getRandomInt(POSSIBLE_INTERVALS.length)]
}

class DownwardIntervalExercise extends Component {
    constructor() {
        super()
        this.playInterval = this.playInterval.bind(this)
    }

    playInterval() {
        const interval = Teoria.interval(this.props.answer).direction('down');

        const synth = new Tone.Synth().toMaster()
        const bottomNoteName = 'C5'
        const topNote = Teoria.interval(
            Teoria.note(bottomNoteName), interval,
        )
        const topNoteName = topNote.name() + topNote.accidental() + topNote.octave()

        synth.triggerAttackRelease(bottomNoteName, '4n')
        synth.triggerAttackRelease(topNoteName, '4n', Tone.now() + Tone.Time('4n'))
    }

    render() {
        const { answer, submittedAnswers, onAnswerClick } = this.props;

        return (
            <div>
                <Button
                    onClick={this.playInterval}
                    className="play-button"
                >
                    <div>
                        <MdVolumeUp className="play-button-sound-icon" />
                        Play Interval
                    </div>
                </Button>
                <p className="instructions-text">Identify the interval</p>
                <AnswerButtons
                    onAnswerClick={onAnswerClick}
                    correctAnswer={answer}
                    submittedAnswers={submittedAnswers}
                />
            </div>
        )
    }
}


DownwardIntervalExercise.propTypes = {
    answer: PropTypes.string,
    submittedAnswers: PropTypes.arrayOf(PropTypes.string), // string ids  of Teoria intervals
    onAnswerClick: PropTypes.func,
}

export default DownwardIntervalExercise
