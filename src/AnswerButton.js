import React from 'react';
import PropTypes from 'prop-types';

import './AnswerButton.css';

function AnswerButton({ text, onClick, value, color, layoutClassName }) {
    return (
        <button
            value={value}
            onClick={onClick}
            className={`answer-button ${color} ${layoutClassName}`}
        >
            {text}
        </button>
    )
}

AnswerButton.propTypes = {
    text: PropTypes.string,
    value: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
    layoutClassName: PropTypes.string,
}

export default AnswerButton
