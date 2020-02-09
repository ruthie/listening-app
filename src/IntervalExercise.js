import React, { Component } from "react";
import PropTypes from "prop-types";

class IntervalExercise extends Component {
    render() {
        return (
            <button>{this.props.buttonTitle}</button>
        )
    }
}

IntervalExercise.propTypes = {
    buttonTitle: PropTypes.string,
}

export default IntervalExercise
