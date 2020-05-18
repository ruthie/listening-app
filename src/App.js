import React from 'react';
import {
    HashRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';

import './App.css';
import Home from './Home.js';
import QuizController from './QuizController.js';

import { getRandomInterval } from './utils.js'
import UpwardIntervalExercise from './UpwardIntervalExercise.js'
import DownwardIntervalExercise from './DownwardIntervalExercise.js'
import SimultaneousIntervalExercise from './SimultaneousIntervalExercise.js'

function App() {
    return (
        <Router>
            <div className="app">
                <Switch>
                    <Route path="/upward-intervals">
                        <QuizController
                            exerciseClass={UpwardIntervalExercise}
                            questionGenerator={getRandomInterval}
                        />
                    </Route>
                    <Route path="/downward-intervals">
                        <QuizController
                            exerciseClass={DownwardIntervalExercise}
                            questionGenerator={getRandomInterval}
                        />
                    </Route>
                    <Route path="/simultaneous-intervals">
                        <QuizController
                            exerciseClass={SimultaneousIntervalExercise}
                            questionGenerator={getRandomInterval}
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
