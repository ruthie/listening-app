import React, { Component } from "react";
import Teoria from "teoria";

import IntervalExercise from "./IntervalExercise.js";

const POSSIBLE_INTERVALS = [
    Teoria.interval('M2'),
    Teoria.interval('m3'),
]

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

class IntervalExerciseController extends Component {
    constructor() {
        super()

        this.state = {
            interval: POSSIBLE_INTERVALS[getRandomInt(POSSIBLE_INTERVALS.length)]
        }
    }

    render() {
        return <IntervalExercise interval={this.state.interval}/>
    }
}

export default IntervalExerciseController
