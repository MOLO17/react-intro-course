/**
 * NOTE: Here we define a reducer, a function that specify how the app state changes in response to
 * actions sent to the store.
 */

import { PASSENGER_ADDED } from './actions';

const DEFAULT_PASSENGERS_STATE = {
  passengers: [],
};

////////////////////////////////////////////////////////////////////////////////////////////////////
// Reducer function.
////////////////////////////////////////////////////////////////////////////////////////////////////
export const passengersReducer = (
  /**
   * NOTE: here we assign a default state so redux can initialize our state even if it's undefined.
   */
  state = DEFAULT_PASSENGERS_STATE,
  { type, ...payload },
) => {
  switch (type) {
    /**
     * NOTE: remember to use curly brackets to isolate scope.
     */
    case PASSENGER_ADDED: {
      const { passengers } = state;
      const { passenger } = payload;

      return {
        ...state,
        passengers: [...passengers, passenger],
      };
    }

    default: {
      return state;
    }
  }
};
