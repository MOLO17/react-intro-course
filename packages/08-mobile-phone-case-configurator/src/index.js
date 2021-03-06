import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import './index.css';

import App from './containers/App/App';
import * as serviceWorker from './serviceWorker';

import configureStore from './store/store';

import { loadConfiguration } from './store/actions';

const store = configureStore({ loading: true });

store.dispatch(loadConfiguration());

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
