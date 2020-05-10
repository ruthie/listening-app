import React from 'react';
import {
    HashRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';

import './App.css';
import Home from './Home.js';
import QuizController from './QuizController.js';

import UpwardIntervalExercise, { generateRandomUpwardInterval } from './UpwardIntervalExercise.js'
import DownwardIntervalExercise, { generateRandomDownwardInterval } from './DownwardIntervalExercise.js'
import SimultaneousIntervalExercise, { generateRandomSimultaneousInterval } from './SimultaneousIntervalExercise.js'

function App() {
    return (
        <Router>
            <div className="app">
                <Switch>
                    <Route path="/upward-intervals">
                        <QuizController
                            exerciseClass={UpwardIntervalExercise}
                            questionGenerator={generateRandomUpwardInterval}
                        />
                    </Route>
                    <Route path="/downward-intervals">
                        <QuizController
                            exerciseClass={DownwardIntervalExercise}
                            questionGenerator={generateRandomDownwardInterval}
                        />
                    </Route>
                    <Route path="/simultaneous-intervals">
                        <QuizController
                            exerciseClass={SimultaneousIntervalExercise}
                            questionGenerator={generateRandomSimultaneousInterval}
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
