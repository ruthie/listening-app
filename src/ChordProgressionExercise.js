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

    // root pos vs. inversions
    // which chords it includes
    // 7ths

    playChord() {
        const cM = Teoria.chord('C', 4).voicing(['P1', 'M3', 'P5', 'P8'])
        const fM = Teoria.chord('F', 3).voicing(['P1', 'P8', 'M10', 'P12'])
        const gM = Teoria.chord('G', 3).voicing(['P1', 'P5', 'P8', 'M10'])

        const chords = [cM, fM, gM, cM]

        const synth = new Tone.PolySynth(20, Tone.Synth).toMaster()
        for (var i = 0; i < chords.length; i++) {
            const notes = chords[i].notes().map(n => teoriaNoteToToneJs(n))
            synth.triggerAttackRelease(notes, '2n', Tone.now() + Tone.Time('2n')*i)
        }
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
