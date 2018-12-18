import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import { Provider } from 'react-redux';

import App from './containers/App/App';
import * as serviceWorker from './serviceWorker';

import configureStore from './store/store';
import { loadConfiguration } from './store/actions';

const store = configureStore({
  color: '#FA7268',
  text: '',
  texture: 'NONE',
  loading: true,
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

store.dispatch(loadConfiguration());

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
