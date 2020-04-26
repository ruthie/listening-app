import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Button from './Button.js'
import './Home.css'

class Home extends Component {
    render() {
        return (
            <div>
                <p>
                    Welcome to the listening app
                </p>
                <Button
                    className="start-quiz-button"
                    onClick={null}
                >
                    <Link to="/quiz">Quiz</Link>
                </Button>
            </div>
        )
    }
}

export default Home
