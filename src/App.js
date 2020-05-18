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

                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
