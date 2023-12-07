// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import PollingApp from './PollingApp'; 

ReactDOM.render(
  <Provider store={store}>
    <PollingApp />
  </Provider>,
  document.getElementById('root')
);
