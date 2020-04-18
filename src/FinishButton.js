import React from 'react';
import PropTypes from 'prop-types';

import './FinishButton.css';

function FinishButton({ onClick }) {
    return (
        <button onClick={onClick} className="finish-button">Finish</button>
    )
}

FinishButton.propTypes = {
    onClick: PropTypes.func,
}

export default FinishButton
