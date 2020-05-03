import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Tone from 'tone';
import Teoria from 'teoria';

import AnswerButtons, { POSSIBLE_INTERVALS } from './AnswerButtons.js';
import PlayButton from './PlayButton.js';
import './UpwardIntervalExercise.css';


function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}


export function generateRandomUpwardInterval() {
    return POSSIBLE_INTERVALS[getRandomInt(POSSIBLE_INTERVALS.length)]
}

class UpwardIntervalExercise extends Component {
    constructor() {
        super()
        this.playInterval = this.playInterval.bind(this)
    }


    playInterval() {
        const synth = new Tone.Synth().toMaster()
        const bottomNoteName = 'C4'
        const topNote = Teoria.interval(
            Teoria.note(bottomNoteName), Teoria.interval(this.props.answer),
        )
        const topNoteName = topNote.name() + topNote.accidental() + topNote.octave()

        synth.triggerAttackRelease(bottomNoteName, '4n')
        synth.triggerAttackRelease(topNoteName, '4n', Tone.now() + Tone.Time('4n'))
    }

    render() {
        const { answer, submittedAnswers, onAnswerClick } = this.props;

        return (
            <div>
                <PlayButton
                    onClick={this.playInterval}
                />
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


UpwardIntervalExercise.propTypes = {
    answer: PropTypes.string,
    submittedAnswers: PropTypes.arrayOf(PropTypes.string), // string ids  of Teoria intervals
    onAnswerClick: PropTypes.func,
}

export default UpwardIntervalExercise
