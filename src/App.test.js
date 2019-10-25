import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider, } from 'react-redux';
import { ConnectedRouter, } from 'connected-react-router';
import configureStore, { history, } from './redux/store';

it('renders without crashing', () => {
  const store = configureStore();
  const div = document.createElement('div');

  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>, div);

  ReactDOM.unmountComponentAtNode(div);
});
