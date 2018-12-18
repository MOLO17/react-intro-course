import { ERROR_CREATED, ERROR_DELETED } from './errors.actions';

const errorsReducer = (state = [], action) => {
  switch (action.type) {
    case ERROR_CREATED: {
      const { id, message } = action;

      return [...state, { id, message }];
    }

    case ERROR_DELETED: {
      return state.filter(({ id }) => id !== action.id);
    }

    default: {
      return state;
    }
  }
};

export default errorsReducer;
