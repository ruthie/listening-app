import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';

import './App.css';
import Home from './Home.js';
import QuizController from './QuizController.js';

import UpwardIntervalExercise, { generateRandomInterval } from './UpwardIntervalExercise.js'

function App() {
    return (
        <Router>
            <div className="app">
                <Switch>
                    <Route path="/Quiz">
                        <QuizController
                            exerciseClass={UpwardIntervalExercise}
                            questionGenerator={generateRandomInterval}
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
