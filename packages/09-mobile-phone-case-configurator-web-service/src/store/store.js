import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import configuratorReducer from './reducer';
import createConfigurationService from '../data/configuration.service';

/**
 * NOTE: here we declare a function that configures our redux store instance.
 */
const configureStore = initialState =>
  createStore(
    configuratorReducer,
    initialState,
    applyMiddleware(
      thunk.withExtraArgument({
        configurationService: createConfigurationService(),
      }),
    ),
  );

export default configureStore;
