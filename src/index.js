import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
<<<<<<< HEAD
import './Common.css';
=======
>>>>>>> c40c7a37945ef6be26bcbbea76c97f53a084db7e
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <Router>
        <App />
    </Router>
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
