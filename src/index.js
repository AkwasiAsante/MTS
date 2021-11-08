import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//auth stuff
import { Provider } from 'react-redux';
import store from './auth/store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById('root')
);
