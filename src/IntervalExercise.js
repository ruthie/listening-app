import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Tone from 'tone';
import Teoria from 'teoria';

import './AnswerButton.css';
import './PlayButton.css';
import { MdVolumeUp } from 'react-icons/md';

function AnswerButton({ text, onClick, value, color, layoutClassName}) {
    return (
        <button
            value={value}
            onClick={onClick}
            className={`answer-button ${color} ${layoutClassName}`}
        >
            {text}
        </button>
    )
}

function PlaySoundButton({ onClick }) {
    return (
        <button onClick={onClick} className='play-button'>
            <MdVolumeUp className='play-button-sound-icon'/>
            PLAY INTERVAL
        </button>
    )
}

const intervalDisplayInfo = {
    'm2': {
        friendlyName: 'Minor 2nd',
        layoutClassName: 'minor2'
    },
    'M2': {
        friendlyName: 'Major 2nd',
        layoutClassName: 'major2'
    },
    'm3': {
        friendlyName: 'Minor 3rd',
        layoutClassName: 'minor3',
    },
    'M3': {
        friendlyName: 'Major 3rd',
        layoutClassName: 'major3',
    },
    'P4': {
        friendlyName: 'Perfect 4th',
        layoutClassName: 'perfect4',
    },
    'd5': {
        friendlyName: 'Diminished 5th',
        layoutClassName: 'diminished5',
    },
    'P5': {
        friendlyName: 'Perfect 5th',
        layoutClassName: 'perfect5',
    },
    'm6': {
        friendlyName: 'Minor 6th',
        layoutClassName: 'minor6',
    },
    'M6': {
        friendlyName: 'Major 6th',
        layoutClassName: 'major6',
    },
    'm7': {
        friendlyName: 'Minor 7th',
        layoutClassName: 'minor7',
    },
    'M7': {
        friendlyName: 'Major 7th',
        layoutClassName: 'major7',
    }
}

class IntervalExercise extends Component {
    constructor() {
        super()
        this.playInterval = this.playInterval.bind(this)
    }


    playInterval() {
        let synth = new Tone.Synth().toMaster()
        let bottomNoteName = 'C4'
        let topNote = Teoria.interval(
            Teoria.note(bottomNoteName), this.props.interval
        )
        let topNoteName = topNote.name() + topNote.accidental() + topNote.octave()

        synth.triggerAttackRelease(bottomNoteName, '4n')
        synth.triggerAttackRelease(topNoteName, '4n', Tone.now() + Tone.Time('4n'))
    }

    render() {
        const { interval, possibleAnswers, submittedAnswers, onAnswerClick } = this.props;

        return (
            <div>
                <PlaySoundButton onClick={this.playInterval}/>
                <p className='instructions-text'>Identify the interval</p>
                <div className="answer-buttons-container">
                    {possibleAnswers.map(x => {
                        let intervalName = x.toString()
                        var intervalFriendlyName = intervalDisplayInfo[intervalName].friendlyName

                        let color = 'white'
                        if (submittedAnswers.includes(x.toString())) {
                            color = intervalName === interval.toString() ? 'green' : 'red'
                        }

                        return (
                            <AnswerButton
                                key={intervalName}
                                text={intervalFriendlyName}
                                value={intervalName}
                                color={color}
                                onClick={onAnswerClick}
                                layoutClassName={intervalDisplayInfo[intervalName].layoutClassName}
                            />
                        )
                    })}
                </div>
            </div>
        )
    }
}

PlaySoundButton.propTypes = {
    onClick: PropTypes.func,
}

AnswerButton.propTypes = {
    key: PropTypes.string,
    text: PropTypes.string,
    value: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}

IntervalExercise.propTypes = {
    interval: PropTypes.object, // Teoria interval
    possibleAnswers: PropTypes.arrayOf(PropTypes.object), // Array of Teoria intervals
    submittedAnswers: PropTypes.arrayOf(PropTypes.string), // Array of string ids  of Teoria intervals
    onAnswerClick: PropTypes.func,
}

export default IntervalExercise
