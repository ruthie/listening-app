import React from 'react';
import PropTypes from 'prop-types';
import { MdVolumeUp } from 'react-icons/md';

import './PlayButton.css';

function PlayButton({ onClick }) {
    return (
        <button onClick={onClick} className="play-button">
            <MdVolumeUp className="play-button-sound-icon" />
            Play Interval
        </button>
    )
}


PlayButton.propTypes = {
    onClick: PropTypes.func,
}

export default PlayButton
