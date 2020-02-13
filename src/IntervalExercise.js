import React, { Component } from "react";
import PropTypes from "prop-types";

function IntervalExercise({ interval }) {
    return (
        <div>
            {interval.toString()}
        </div>
    )
}

IntervalExercise.propTypes = {
    interval: PropTypes.object, // Teoria interval
}

export default IntervalExercise
