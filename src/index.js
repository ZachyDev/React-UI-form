import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import App2 from './App2';
// import App3 from './App3';
import Register from './Register'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Register />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();