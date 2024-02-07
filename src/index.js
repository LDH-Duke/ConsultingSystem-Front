import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './Common.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from "./ScrollToTop";

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <Router>
        <ScrollToTop/>
        <App />
    </Router>
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
