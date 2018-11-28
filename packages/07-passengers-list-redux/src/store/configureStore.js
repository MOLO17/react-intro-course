import { createStore } from 'redux';

import { passengersReducer } from './reducer';

/**
 * NOTE: here we declare a function that configures our redux store instance.
 */
export default initialState => createStore(passengersReducer, initialState);
