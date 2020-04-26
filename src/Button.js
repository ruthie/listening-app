import React from 'react';
import PropTypes from 'prop-types';

import './Button.css';

function Button({ className, text, ...props }) {
    return (
        <button className={`button ${className}`} {...props}>
            {text}
        </button>
    )
}

Button.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func,
    text: PropTypes.string,
}

export default Button
