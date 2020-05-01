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
                    to="/quiz"
                    className="link-button start-quiz-button"
                >
                    Quiz
                </Link>
            </div>
        )
    }
}

export default Home
