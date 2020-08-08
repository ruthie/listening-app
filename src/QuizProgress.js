import React, { memo } from 'react'
import PropTypes from 'prop-types'

import './QuizProgress.css'

const QuizProgress = ({ currentQuestion, totalQuestions }) => (
    <div className="quiz-progress">
        <progress
            className="quiz-progress__bar"
            min={0}
            value={currentQuestion}
            max={totalQuestions}
        />
        <div className="quiz-progress__label">
            {currentQuestion}/{totalQuestions} completed
        </div>
    </div>
)

QuizProgress.propTypes = {
    currentQuestion: PropTypes.number,
    totalQuestions: PropTypes.number,
}

export default memo(QuizProgress)
