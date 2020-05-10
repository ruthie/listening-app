import React from 'react';
import {
    HashRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';

import './App.css';
import Home from './Home.js';
import QuizController from './QuizController.js';

import IntervalExercise, { generateRandomInterval } from './IntervalExercise.js'

function App() {
    return (
        <Router>
            <div className="app">
                <Switch>
                    <Route path="/Quiz">
                        <QuizController
                            exerciseClass={IntervalExercise}
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
