import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
                            className="link-button start-quiz-button exercise-1"
                        >
                            Up
                        </Link>
                        <Link
                            to="/downward-intervals"
                            className="link-button start-quiz-button exercise-2"
                        >
                            Down
                        </Link>
                        <Link
                            to="/simultaneous-intervals"
                            className="link-button start-quiz-button exercise-3"
                        >
                            Same
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
