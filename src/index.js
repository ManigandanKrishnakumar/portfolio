import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './styled-components/_global-styles.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './assets/fonts/segoeuil.ttf';
import './assets/fonts/segoe-ui.ttf';

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
