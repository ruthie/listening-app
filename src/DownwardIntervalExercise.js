import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Tone from 'tone';
import Teoria from 'teoria';

import { getRandomInterval, getRandomNoteInOctaveAbove } from './utils.js';
import AnswerButtons from './AnswerButtons.js';
import PlayButton from './PlayButton.js';
import InstructionsText from './InstructionsText.js'

export function generateDownwardIntervalExercise() {
    return {
        answer: getRandomInterval(),
        topNote: getRandomNoteInOctaveAbove('B4'),
    }
}

class DownwardIntervalExercise extends Component {
    constructor() {
        super()
        this.playInterval = this.playInterval.bind(this)
    }

    playInterval() {
        const interval = Teoria.interval(this.props.answer).direction('down');

        const synth = new Tone.Synth().toMaster()
        const topNoteName = this.props.exerciseInfo.topNote
        const bottomNote = Teoria.interval(
            Teoria.note(topNoteName), interval,
        )
        const bottomNoteName = bottomNote.name() + bottomNote.accidental() + bottomNote.octave()

        synth.triggerAttackRelease(topNoteName, '4n')
        synth.triggerAttackRelease(bottomNoteName, '4n', Tone.now() + Tone.Time('4n'))
    }

    render() {
        const { answer, submittedAnswers, onAnswerClick } = this.props;

        return (
            <div>
                <PlayButton
                    onClick={this.playInterval}
                />
                <InstructionsText>Identify the interval</InstructionsText>
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
    exerciseInfo: PropTypes.object,
    submittedAnswers: PropTypes.arrayOf(PropTypes.string), // string ids  of Teoria intervals
    onAnswerClick: PropTypes.func,
}

export default DownwardIntervalExercise
