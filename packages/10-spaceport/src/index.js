import 'typeface-roboto';

import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import App from './containers/App/App';

import * as serviceWorker from './serviceWorker';

import configureStore from './store/configureStore';

import shipsDataSourceFactory from './data/shipsDataSource';

const initialState = {
  ships: [],
  errors: [],
  pendingRequests: [],
};

const store = configureStore({
  initialState,
  shipsDataSource: shipsDataSourceFactory('http://localhost:3001'),
});

ReactDOM.render(
  (
    <Provider store={store}>
      <App />
    </Provider>
  ),
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
