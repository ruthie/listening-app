import React from 'react';
import {
    HashRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';

import './App.css';
import Home from './Home.js';
import QuizController from './QuizController.js';

import UpwardIntervalExercise, { generateUpwardIntervalExercise } from './UpwardIntervalExercise.js'
import DownwardIntervalExercise, { generateDownwardIntervalExercise } from './DownwardIntervalExercise.js'
import SimultaneousIntervalExercise, { generateSimultaneousIntervalExercise } from './SimultaneousIntervalExercise.js'
import UpwardIntervalTuningExercise, { generateUpwardIntervalTuningExercise } from './UpwardIntervalTuningExercise.js'
import DownwardIntervalTuningExercise, { generateDownwardIntervalTuningExercise } from './DownwardIntervalTuningExercise.js'
import SimultaneousIntervalTuningExercise, { generateSimultaneousIntervalTuningExercise } from './SimultaneousIntervalTuningExercise.js'


function App() {
    return (
        <Router>
            <div className="app">
                <Switch>
                    <Route path="/upward-intervals">
                        <QuizController
                            exerciseClass={UpwardIntervalExercise}
                            questionGenerator={generateUpwardIntervalExercise}
                        />
                    </Route>
                    <Route path="/downward-intervals">
                        <QuizController
                            exerciseClass={DownwardIntervalExercise}
                            questionGenerator={generateDownwardIntervalExercise}
                        />
                    </Route>
                    <Route path="/simultaneous-intervals">
                        <QuizController
                            exerciseClass={SimultaneousIntervalExercise}
                            questionGenerator={generateSimultaneousIntervalExercise}
                        />
                    </Route>
                    <Route path="/upward-interval-tuning">
                        <QuizController
                            exerciseClass={UpwardIntervalTuningExercise}
                            questionGenerator={generateUpwardIntervalTuningExercise}
                        />
                    </Route>
                    <Route path="/downward-interval-tuning">
                        <QuizController
                            exerciseClass={DownwardIntervalTuningExercise}
                            questionGenerator={generateDownwardIntervalTuningExercise}
                        />
                    </Route>
                    <Route path="/simultaneous-interval-tuning">
                        <QuizController
                            exerciseClass={SimultaneousIntervalTuningExercise}
                            questionGenerator={generateSimultaneousIntervalTuningExercise}
                        />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
