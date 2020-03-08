import React, { Component } from "react";
import PropTypes from "prop-types";
import Tone from "tone";

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

        var synth = new Tone.Synth().toMaster()
        var playInterval = function() {
           var bottomNote = 'C4';
           var topNote = 'D4';

           synth.triggerAttackRelease(bottomNote, '4n')
           synth.triggerAttackRelease(topNote, '4n', Tone.Time('4n'))
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
