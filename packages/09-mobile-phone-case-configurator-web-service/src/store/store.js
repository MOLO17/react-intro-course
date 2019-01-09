/**
 * NOTE: here we declare a function that configures our redux store instance.
 */

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import configuratorReducer from './reducer/reducer';

const configureStore = ({ configurationService }) => initialState =>
  createStore(
    configuratorReducer,
    initialState,
    applyMiddleware(thunk.withExtraArgument({ configurationService })),
  );

export default configureStore;
