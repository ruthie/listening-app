import React from 'react'
import PropTypes from 'prop-types'

import { UPWARD, DOWNWARD, SIMULTANEOUS } from './symbols.js'

import './index.css'

const COLOR_MAP = {
    blue: { circle: '#1D8FF9', stroke: '#0060B9', icon: '#FFF' },
    green: { circle: '#60BD47', stroke: '#599748', icon: '#FFF' },
}

const SYMBOL_MAP = {
    upward: UPWARD,
    downward: DOWNWARD,
    simultaneous: SIMULTANEOUS,
}

const STROKE_WIDTH = 8
const CIRCLE_WIDTH = 100

export default function CircleIcon({
    className,
    symbol,
    color,
}) {
    return (
        <svg className={`cicon ${className}`} viewBox={`0 0 ${CIRCLE_WIDTH} ${CIRCLE_WIDTH}`}>
            {/*
                Circle Fill
                We make the circle slightly larger than it needs to be to ensure
                no edge pixel issues
            */}
            <circle
                fill={COLOR_MAP[color].circle}
                cx={CIRCLE_WIDTH / 2}
                cy={CIRCLE_WIDTH / 2}
                r={(CIRCLE_WIDTH - STROKE_WIDTH * 0.75) / 2}
            />
            {/* Icon */}
            <clipPath id="symbol-clip">
                <circle
                    cx={CIRCLE_WIDTH / 2}
                    cy={CIRCLE_WIDTH / 2}
                    r={(CIRCLE_WIDTH - STROKE_WIDTH * 0.75) / 2}
                />
            </clipPath>
            <g clipPath="url(#symbol-clip)">
                {SYMBOL_MAP[symbol]}
            </g>
            {/* Circle Stroke */}
            <circle
                stroke={COLOR_MAP[color].stroke}
                strokeWidth={STROKE_WIDTH}
                fill="none"
                cx={CIRCLE_WIDTH / 2}
                cy={CIRCLE_WIDTH / 2}
                r={(CIRCLE_WIDTH - STROKE_WIDTH) / 2}
            />
        </svg>
    )
}

CircleIcon.defaultProps = {
    className: '',
    color: 'blue',
    symbol: 'upward',
}

CircleIcon.propTypes = {
    className: PropTypes.string,
    color: PropTypes.oneOf(Object.keys(COLOR_MAP)),
    symbol: PropTypes.oneOf(Object.keys(SYMBOL_MAP)),
}
