import React, { Component } from 'react';
import PropTypes from 'prop-types';

import AgainButton from './AgainButton.js'

class QuizCompleted extends Component {
    render() {
        return <AgainButton onClick={this.props.onAgainClick} />
    }
}

QuizCompleted.propTypes = {
    onAgainClick: PropTypes.func,
}

export default QuizCompleted
