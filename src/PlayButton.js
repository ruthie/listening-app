import React from 'react';
import PropTypes from 'prop-types';

import { MdVolumeUp } from 'react-icons/md';

import Button from './Button.js'
import './PlayButton.css'

function PlayButton({ onClick }) {
    return (
        <Button
            onClick={onClick}
            className="play-button"
        >
            <div>
                <MdVolumeUp className="play-button-sound-icon" />
                Play Interval
            </div>
        </Button>
    )
}

PlayButton.propTypes = {
    onClick: PropTypes.func,
}

export default PlayButton
