import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Tone from 'tone';
import Teoria from 'teoria';

import { getRandomTuningInterval, getRandomNoteInOctaveAbove, getRandomDirection,
    INTERVAL_INFO, getRandomPitchDeviation } from './utils.js';
import { SharpFlatAnswerButtons } from './AnswerButtons.js';
import PlayButton from './PlayButton.js';
import InstructionsText from './InstructionsText.js'


export function generateDownwardIntervalTuningExercise() {
    return {
        answer: getRandomDirection(),
        interval: getRandomTuningInterval(),
        topNote: getRandomNoteInOctaveAbove('B3'),
        pitchDeviation: getRandomPitchDeviation(),
    }
}

class DownwardIntervalTuningExercise extends Component {
    constructor() {
        super()
        this.playInterval = this.playInterval.bind(this)
    }


    playInterval() {
        const { topNote, pitchDeviation, interval } = this.props.exerciseInfo
        const downwardInterval = Teoria.interval(interval).direction('down');

        const synth = new Tone.Synth().toMaster()
        const bottomNote = Teoria.interval(
            Teoria.note(topNote), downwardInterval,
        )
        const inTuneBottomNoteFreq = bottomNote.fq();

        const adjustmentRatio = this.props.answer === 'sharp' ? pitchDeviation : 1.0 / pitchDeviation
        const adjustedBottomNotFreq = inTuneBottomNoteFreq * adjustmentRatio

        synth.triggerAttackRelease(topNote, '4n')
        synth.triggerAttackRelease(adjustedBottomNotFreq, '4n', Tone.now() + Tone.Time('4n'))
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
                    Is the second note sharp or flat of a downward {intervalName}?
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


DownwardIntervalTuningExercise.propTypes = {
    answer: PropTypes.string,
    exerciseInfo: PropTypes.object,
    submittedAnswers: PropTypes.arrayOf(PropTypes.string), // string ids  of Teoria intervals
    onAnswerClick: PropTypes.func,
}

export default DownwardIntervalTuningExercise
