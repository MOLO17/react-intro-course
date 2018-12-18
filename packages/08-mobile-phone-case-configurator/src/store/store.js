import { createStore, applyMiddleware, compose } from 'redux';

import thunkMiddleware from 'redux-thunk';

import configuratorReducer from './reducer';
import createConfigurationService from '../data/configurationService.local';

/**
 * Configuration service
 *
 * async getConfiguration(...arg)
 * async setConfiguration(...arg)
 */

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

/**
 * NOTE: here we declare a function that configures our redux store instance.
 */
const configureStore = initialState =>
  createStore(
    configuratorReducer,
    initialState,
    composeEnhancers(
      applyMiddleware(
        thunkMiddleware.withExtraArgument({
          configurationService: createConfigurationService(
            process.env.REACT_APP_STORAGE_KEY,
          ),
        }),
      ),
    ),
  );

export default configureStore;
