import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Tone from 'tone';
import Teoria from 'teoria';

import { getRandomInterval, getRandomNoteInOctaveAbove } from './utils.js';
import { IntervalAnswerButtons } from './AnswerButtons.js';
import PlayButton from './PlayButton.js';
import InstructionsText from './InstructionsText.js'

export function generateSimultaneousIntervalExercise() {
    return {
        answer: getRandomInterval(),
        bottomNote: getRandomNoteInOctaveAbove('B3'),
    }
}

class SimultaneousIntervalExercise extends Component {
    constructor() {
        super()
        this.playInterval = this.playInterval.bind(this)
    }

    playInterval() {
        const interval = Teoria.interval(this.props.answer)

        const synth = new Tone.PolySynth(2, Tone.Synth).toMaster()
        const bottomNoteName = this.props.exerciseInfo.bottomNote
        const topNote = Teoria.interval(
            Teoria.note(bottomNoteName), interval,
        )
        const topNoteName = topNote.name() + topNote.accidental() + topNote.octave()

        synth.triggerAttackRelease([bottomNoteName, topNoteName], '2n')
    }

    render() {
        const { answer, submittedAnswers, onAnswerClick } = this.props;

        return (
            <div>
                <PlayButton
                    onClick={this.playInterval}
                />
                <InstructionsText>Identify the interval</InstructionsText>
                <IntervalAnswerButtons
                    onAnswerClick={onAnswerClick}
                    correctAnswer={answer}
                    submittedAnswers={submittedAnswers}
                />
            </div>
        )
    }
}


SimultaneousIntervalExercise.propTypes = {
    answer: PropTypes.string,
    exerciseInfo: PropTypes.object,
    submittedAnswers: PropTypes.arrayOf(PropTypes.string), // string ids  of Teoria intervals
    onAnswerClick: PropTypes.func,
}

export default SimultaneousIntervalExercise
