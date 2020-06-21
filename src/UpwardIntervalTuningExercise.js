import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Tone from 'tone';
import Teoria from 'teoria';

import { getRandomInterval, getRandomNoteInOctaveAbove, getRandomDirection, INTERVAL_INFO } from './utils.js';
import { SharpFlatAnswerButtons } from './AnswerButtons.js';
import PlayButton from './PlayButton.js';
import InstructionsText from './InstructionsText.js'


export function generateUpwardIntervalTuningExercise() {
    return {
        answer: getRandomDirection(),
        interval: getRandomInterval(),
        bottomNote: getRandomNoteInOctaveAbove('B3'),
    }
}

class UpwardIntervalTuningExercise extends Component {
    constructor() {
        super()
        this.playInterval = this.playInterval.bind(this)
    }


    playInterval() {
        const synth = new Tone.Synth().toMaster()
        const bottomNoteName = this.props.exerciseInfo.bottomNote
        const topNote = Teoria.interval(
            Teoria.note(bottomNoteName), Teoria.interval(this.props.exerciseInfo.interval),
        )
        const inTuneTopNoteFreq = topNote.fq();
        const adjustmentRatio = this.props.answer === 'sharp' ? 1.03 : 1.0 / 1.03
        const adjustedTopNotFreq = inTuneTopNoteFreq * adjustmentRatio

        synth.triggerAttackRelease(bottomNoteName, '4n')
        synth.triggerAttackRelease(adjustedTopNotFreq, '4n', Tone.now() + Tone.Time('4n'))
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
                    Is the second note sharp or flat of a {intervalName}?
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


UpwardIntervalTuningExercise.propTypes = {
    answer: PropTypes.string,
    exerciseInfo: PropTypes.object,
    submittedAnswers: PropTypes.arrayOf(PropTypes.string), // string ids  of Teoria intervals
    onAnswerClick: PropTypes.func,
}

export default UpwardIntervalTuningExercise
