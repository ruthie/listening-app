import React from 'react';
import PropTypes from 'prop-types';

import './Button.css';

function Button(props) {
    return (
        <button className={`button ${props.modifierClassName}`} {...props}>
            {props.text}
        </button>
    )
}

Button.propTypes = {
    modifierClassName: PropTypes.string,
    onClick: PropTypes.func,
    text: PropTypes.string,
}

export default Button
