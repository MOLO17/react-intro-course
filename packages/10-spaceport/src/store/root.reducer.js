import { combineReducers } from 'redux';

import errorsReducer from './errors/errors.reducer';
import pendingRequestsReducer from './pendingRequests/pendingRequests.reducer';
import shipsReducer from './ships/ships.reducer';

export default combineReducers({
  ships: shipsReducer,
  errors: errorsReducer,
  pendingRequests: pendingRequestsReducer,
});
