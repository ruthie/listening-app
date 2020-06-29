import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Tone from 'tone';
import Teoria from 'teoria';

import { getRandomTuningInterval, getRandomNoteInOctaveAbove, getRandomDirection,
    INTERVAL_INFO, getRandomPitchDeviation } from './utils.js';
import { SharpFlatAnswerButtons } from './AnswerButtons.js';
import PlayButton from './PlayButton.js';
import InstructionsText from './InstructionsText.js'


export function generateSimultaneousIntervalTuningExercise() {
    return {
        answer: getRandomDirection(),
        interval: getRandomTuningInterval(),
        bottomNote: getRandomNoteInOctaveAbove('B3'),
        pitchDeviation: getRandomPitchDeviation(),
    }
}

class SimultaneousIntervalTuningExercise extends Component {
    constructor() {
        super()
        this.playInterval = this.playInterval.bind(this)
    }


    playInterval() {
        const { bottomNote, pitchDeviation } = this.props.exerciseInfo

        const synth = new Tone.PolySynth(2, Tone.Synth).toMaster()
        const topNote = Teoria.interval(
            Teoria.note(bottomNote), Teoria.interval(this.props.exerciseInfo.interval),
        )
        const inTuneTopNoteFreq = topNote.fq();

        const adjustmentRatio = this.props.answer === 'sharp' ? pitchDeviation : 1.0 / pitchDeviation
        const adjustedTopNoteFreq = inTuneTopNoteFreq * adjustmentRatio

        synth.triggerAttackRelease([bottomNote, adjustedTopNoteFreq], '2n')
    }

    render() {
        const { answer, exerciseInfo, submittedAnswers, onAnswerClick } = this.props;
        const intervalName = INTERVAL_INFO[exerciseInfo.interval].friendlyName.toLowerCase()

        return (
            <div>
                <PlayButton
                    onClick={this.playInterval}
                />
                <InstructionsText>
                    Is the second note sharp or flat of a {intervalName} above the first note?
                </InstructionsText>

                <SharpFlatAnswerButtons
                    onAnswerClick={onAnswerClick}
                    correctAnswer={answer}
                    submittedAnswers={submittedAnswers}
                />
            </div>
        )
    }
}


SimultaneousIntervalTuningExercise.propTypes = {
    answer: PropTypes.string,
    exerciseInfo: PropTypes.object,
    submittedAnswers: PropTypes.arrayOf(PropTypes.string), // string ids  of Teoria intervals
    onAnswerClick: PropTypes.func,
}

export default SimultaneousIntervalTuningExercise
