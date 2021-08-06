import React from 'react';
import ReactDOM from 'react-dom';
require('./assets/javascript/addHandlersOnLoad.js');

import App from './components/App.jsx';

ReactDOM.hydrate(
  <App />,
  document.getElementById('mountNode'),
);