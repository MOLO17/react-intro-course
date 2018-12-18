import {
  PENDING_REQUEST_CREATED,
  PENDING_REQUEST_DELETED,
} from './pendingRequests.actions';

const pendingRequestsReducer = (state = [], action) => {
  switch (action.type) {
    case PENDING_REQUEST_CREATED: {
      return [...state, action.id];
    }

    case PENDING_REQUEST_DELETED: {
      return state.filter(id => id !== action.id);
    }

    default: {
      return state;
    }
  }
};

export default pendingRequestsReducer;
