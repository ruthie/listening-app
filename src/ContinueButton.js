import React from 'react';
import PropTypes from 'prop-types';

import './ContinueButton.css';

function ContinueButton({ onClick }) {
    return (
        <button onClick={onClick} className="continue-button">CONTINUE</button>
    )
}

ContinueButton.propTypes = {
    onClick: PropTypes.func,
}

export default ContinueButton