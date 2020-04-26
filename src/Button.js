import React from 'react';
import PropTypes from 'prop-types';

import './Button.css';

function Button({ className, ...props }) {
    return (
        <button className={`button ${className}`} {...props} />
    )
}

Button.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func,
    text: PropTypes.string,
}

export default Button
