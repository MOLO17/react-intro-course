import {
  COLOR_SET,
  TEXT_SET,
  TEXTURE_SET,
  CONFIGURATION_SET,
  LOADING_SET,
} from './actions';

/**
 * color: string
 * text: string
 * texture: string
 *
 * loading: boolean
 */

const configuratorReducer = (state = {}, action) => {
  switch (action.type) {
    case CONFIGURATION_SET: {
      return {
        ...action.configuration,
        loading: false,
      };
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

    case LOADING_SET: {
      return {
        ...state,
        loading: action.loading,
      };
    }

    default: {
      return state;
    }
  }
};

export default configuratorReducer;
