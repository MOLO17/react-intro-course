import { createStore } from 'redux';

import configuratorReducer from './reducer';

/**
 * NOTE: here we declare a function that configures our redux store instance.
 */
const configureStore = initialState =>
  createStore(configuratorReducer, initialState);

export default configureStore;
