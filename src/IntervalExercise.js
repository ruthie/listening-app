import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Tone from 'tone';
import Teoria from 'teoria';

import { MdVolumeUp } from 'react-icons/md';

import AnswerButton from './AnswerButton.js';
import Button from './Button.js';
import './IntervalExercise.css';


const INTERVAL_DISPLAY_INFO = {
    m2: {
        friendlyName: 'Minor 2nd',
        layoutClassName: 'minor2',
    },
    M2: {
        friendlyName: 'Major 2nd',
        layoutClassName: 'major2',
    },
    m3: {
        friendlyName: 'Minor 3rd',
        layoutClassName: 'minor3',
    },
    M3: {
        friendlyName: 'Major 3rd',
        layoutClassName: 'major3',
    },
    P4: {
        friendlyName: 'Perfect 4th',
        layoutClassName: 'perfect4',
    },
    d5: {
        friendlyName: 'Diminished 5th',
        layoutClassName: 'diminished5',
    },
    P5: {
        friendlyName: 'Perfect 5th',
        layoutClassName: 'perfect5',
    },
    m6: {
        friendlyName: 'Minor 6th',
        layoutClassName: 'minor6',
    },
    M6: {
        friendlyName: 'Major 6th',
        layoutClassName: 'major6',
    },
    m7: {
        friendlyName: 'Minor 7th',
        layoutClassName: 'minor7',
    },
    M7: {
        friendlyName: 'Major 7th',
        layoutClassName: 'major7',
    },
}

const POSSIBLE_INTERVALS = [
    Teoria.interval('m2'),
    Teoria.interval('M2'),
    Teoria.interval('m3'),
    Teoria.interval('M3'),
    Teoria.interval('P4'),
    Teoria.interval('d5'),
    Teoria.interval('P5'),
    Teoria.interval('m6'),
    Teoria.interval('M6'),
    Teoria.interval('m7'),
    Teoria.interval('M7'),
    // TODO: include octave

]

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

export function generateRandomInterval() {
    return POSSIBLE_INTERVALS[getRandomInt(POSSIBLE_INTERVALS.length)]
}

class IntervalExercise extends Component {
    constructor() {
        super()
        this.playInterval = this.playInterval.bind(this)
    }


    playInterval() {
        const synth = new Tone.Synth().toMaster()
        const bottomNoteName = 'C4'
        const topNote = Teoria.interval(
            Teoria.note(bottomNoteName), this.props.interval,
        )
        const topNoteName = topNote.name() + topNote.accidental() + topNote.octave()

        synth.triggerAttackRelease(bottomNoteName, '4n')
        synth.triggerAttackRelease(topNoteName, '4n', Tone.now() + Tone.Time('4n'))
    }

    render() {
        const { interval, submittedAnswers, onAnswerClick } = this.props;

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
                <div className="answer-buttons-container">
                    {Object.entries(INTERVAL_DISPLAY_INFO).map(([intervalName, displayInfo]) => {
                        const intervalFriendlyName = displayInfo.friendlyName

                        let color = 'white'
                        if (submittedAnswers.includes(intervalName)) {
                            color = intervalName === interval.toString() ? 'green' : 'red'
                        }

                        return (
                            <AnswerButton
                                key={intervalName}
                                text={intervalFriendlyName}
                                value={intervalName}
                                color={color}
                                onClick={onAnswerClick}
                                layoutClassName={
                                    INTERVAL_DISPLAY_INFO[intervalName].layoutClassName
                                }
                            />
                        )
                    })}
                </div>
            </div>
        )
    }
}


IntervalExercise.propTypes = {
    interval: PropTypes.object, // Teoria interval
    submittedAnswers: PropTypes.arrayOf(PropTypes.string), // string ids  of Teoria intervals
    onAnswerClick: PropTypes.func,
}

export default IntervalExercise
