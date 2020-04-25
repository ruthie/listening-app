import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
                    modifierClassName="start-quiz-button"
                    text="Start Quiz"
                    onClick={this.props.onStartQuizClick}
                />
            </div>
        )
    }
}

Home.propTypes = {
    onStartQuizClick: PropTypes.func,
}

export default Home
