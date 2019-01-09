/**
 * NOTE: Here we define actions that describe state transformations.
 */

import {
  CONFIGURATION_SET,
  COLOR_SET,
  TEXT_SET,
  TEXTURE_SET,
} from '../actions/actions';

const configuratorReducer = (state = {}, action) => {
  switch (action.type) {
    case CONFIGURATION_SET: {
      return { ...action.configuration };
    }

    case COLOR_SET: {
      return {
        ...state,
        color: action.color,
      };
    }

    case TEXT_SET: {
      return {
        ...state,
        text: action.text,
      };
    }

    case TEXTURE_SET: {
      return {
        ...state,
        texture: action.texture,
      };
    }

    default: {
      return state;
    }
  }
};

export default configuratorReducer;
