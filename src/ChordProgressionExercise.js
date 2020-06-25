import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Tone from 'tone';
import Teoria from 'teoria';

import { getRandomInterval, getRandomNoteInOctaveAbove, teoriaNoteToToneJs } from './utils.js';
import AnswerButtons from './AnswerButtons.js';
import PlayButton from './PlayButton.js';
import InstructionsText from './InstructionsText.js'

export function generateChordProgressionExercise() {
    return {
        answer: getRandomInterval(),
        bottomNote: getRandomNoteInOctaveAbove('B3'),
    }
}

class ChordProgressionExercise extends Component {
    constructor() {
        super()
        this.playChord = this.playChord.bind(this)
    }


    playChord() {
        const synth = new Tone.PolySynth(20, Tone.Synth).toMaster()
        const chord = Teoria.chord('CM')
        const notes = chord.notes().map(n => teoriaNoteToToneJs(n))
        console.log(notes)
        synth.triggerAttackRelease(notes, '2n')
    }

    render() {
        const { answer, submittedAnswers, onAnswerClick } = this.props;

        return (
            <div>
                <PlayButton
                    onClick={this.playChord}
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


ChordProgressionExercise.propTypes = {
    answer: PropTypes.string,
    exerciseInfo: PropTypes.object,
    submittedAnswers: PropTypes.arrayOf(PropTypes.string), // string ids of Teoria intervals
    onAnswerClick: PropTypes.func,
}

export default ChordProgressionExercise
