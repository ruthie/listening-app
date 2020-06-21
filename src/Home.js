import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Home.css'
import './LinkButton.css'

class Home extends Component {
    render() {
        return (
            <div>
                <p>
                    Welcome to the listening app
                </p>

                <Link
                    to="/upward-intervals"
                    className="link-button start-quiz-button"
                >
                    Upward Intervals
                </Link>
                <Link
                    to="/downward-intervals"
                    className="link-button start-quiz-button"
                >
                    Downward Intervals
                </Link>
                <Link
                    to="/simultaneous-intervals"
                    className="link-button start-quiz-button"
                >
                    Simultaneous Intervals
                </Link>
                <Link
                    to="/upward-interval-tuning"
                    className="link-button start-quiz-button"
                >
                    Upward Interval Tuning
                </Link>
                <a
                    href="https://github.com/ruthie/listening-app"
                    className="source-link"
                >
                    Source Code
                </a>
            </div>
        )
    }
}

export default Home
