import React, { Component } from "react";
import PropTypes from "prop-types";
import Tone from "tone";
import Teoria from "teoria";

import './AnswerButton.css';

function AnswerButton({ text, onClick, value, color }) {
    return (
        <button value={value} onClick={onClick} className={color}>{text}</button>
    )
}

function PlaySoundButton({ onClick }) {
    return (
        <button onClick={onClick}> Play Sound </button>
    )
}

class IntervalExercise extends Component {


    render() {
        const { interval, possibleAnswers, submittedAnswers, onAnswerClick } = this.props;

        var playInterval = function() {
           var synth = new Tone.Synth().toMaster()
           var bottomNoteName = 'C4'
           var topNote = Teoria.interval(
             Teoria.note(bottomNoteName), interval
           )
           var topNoteName = topNote.name() + topNote.accidental() + topNote.octave()

           synth.triggerAttackRelease(bottomNoteName, '4n')
           synth.triggerAttackRelease(topNoteName, '4n', Tone.Time('4n'))
        }

        return (
            <div>
                <PlaySoundButton onClick={playInterval}/>
                {possibleAnswers.map(x => {
                    var intervalName = x.toString()

                    var color = 'white'
                    if (submittedAnswers.includes(x.toString())) {
                        color = intervalName == interval ? 'green' : 'red'
                    }

                    return <AnswerButton
                        key={intervalName}
                        text={intervalName}
                        value={intervalName}
                        color={color}
                        onClick={onAnswerClick}/>
                })}
            </div>
        )
    }
}

IntervalExercise.propTypes = {
    interval: PropTypes.object, // Teoria interval
    possibleAnswers: PropTypes.arrayOf(PropTypes.object), // Array of Teoria intervals
    submittedAnswers: PropTypes.arrayOf(PropTypes.string), // Array of string ids  of Teoria intervals
    onAnswerClick: PropTypes.func,
}

export default IntervalExercise
