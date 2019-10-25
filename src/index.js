import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import serviceWorker from './serviceWorker';

import {Provider, } from 'react-redux';
import {ConnectedRouter, } from 'connected-react-router';
import configureStore, {history, } from './redux/store';


const store = configureStore();
const mountNode = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App/>
    </ConnectedRouter>
  </Provider>, mountNode
);


serviceWorker.unregister();
