import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CircleIcon from './CircleIcon/index.js'

import './Home.css'
import './LinkButton.css'
import './App.css'

class Home extends Component {
    render() {
        return (
            <div>
                <div className="top-bar">
                    <p className="max-width">
                        Ruthie&apos;s Listening App
                    </p>
                </div>

                <div className="max-width content">

                    <div className="three-exercise-container">
                        <Link
                            to="/upward-intervals"
                            className="exercise-link"
                        >
                            <CircleIcon color="blue" symbol="upward" />
                            <div> Upward Interval Identification</div>
                        </Link>
                        <Link
                            to="/downward-intervals"
                            className="exercise-link"
                        >
                            <CircleIcon color="blue" symbol="downward" />
                            <div> Downward Interval Identification</div>
                        </Link>
                        <Link
                            to="/simultaneous-intervals"
                            className="exercise-link"
                        >
                            <CircleIcon color="blue" symbol="simultaneous" />
                            <div> Simultaneous Interval Identification</div>
                        </Link>
                    </div>

                    <div className="three-exercise-container">
                        <Link
                            to="/upward-interval-tuning"
                            className="exercise-link"
                        >
                            <CircleIcon color="green" symbol="upward" />
                            <div> Upward Interval Tuning</div>
                        </Link>
                        <Link
                            to="/downward-interval-tuning"
                            className="exercise-link"
                        >
                            <CircleIcon color="green" symbol="downward" />
                            <div> Downward Interval Tuning</div>
                        </Link>
                        <Link
                            to="/simultaneous-interval-tuning"
                            className="exercise-link"
                        >
                            <CircleIcon color="green" symbol="simultaneous" />
                            <div> Simultaneous Interval Tuning</div>
                        </Link>
                    </div>

                    <a
                        href="https://github.com/ruthie/listening-app"
                        className="source-link"
                    >
                        Source Code
                    </a>
                </div>
            </div>
        )
    }
}

export default Home
