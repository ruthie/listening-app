import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Tone from 'tone';
import Teoria from 'teoria';

import { getRandomInterval, getRandomNoteInOctaveAbove, getRandomDirection } from './utils.js';
import { AnswerButton } from './AnswerButtons.js';
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
        const { answer, submittedAnswers, onAnswerClick } = this.props;

        return (
            <div>
                <PlayButton
                    onClick={this.playInterval}
                />
                <InstructionsText>Is the second note sharp or flat?</InstructionsText>

                <div className="answer-buttons-container">
                    {['flat', 'sharp'].map((direction) => {
                        let color = 'white'
                        if (submittedAnswers.includes(direction)) {
                            color = direction === this.props.answer.toString() ? 'green' : 'red'
                        }

                        return (
                            <AnswerButton
                                key={direction}
                                text={direction}
                                value={direction}
                                color={color}
                                onClick={this.props.onAnswerClick}
                                layoutClassName=""

                                onAnswerClick={onAnswerClick}
                                correctAnswer={answer}
                                submittedAnswers={submittedAnswers}
                            />
                        )
                    })}
                </div>
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
