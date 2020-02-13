import React, { Component } from "react";
import PropTypes from "prop-types";


function AnswerButton({ text }) {
    return (
        <button>{text}</button>
    )
}

function IntervalExercise({ interval, possibleAnswers }) {
    return (
        <div>
            {interval.toString()}
            {possibleAnswers.map(x => <AnswerButton text={x.toString()}/>)}
        </div>
    )
}

IntervalExercise.propTypes = {
    interval: PropTypes.object, // Teoria interval
}

export default IntervalExercise
