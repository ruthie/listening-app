import React from 'react';
import PropTypes from 'prop-types';

import './AgainButton.css';

function AgainButton({ onClick }) {
    return (
        <button onClick={onClick} className="again-button">Try Again</button>
    )
}

AgainButton.propTypes = {
    onClick: PropTypes.func,
}

export default AgainButton
