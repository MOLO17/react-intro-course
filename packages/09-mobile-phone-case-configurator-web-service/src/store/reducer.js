import {
  COLOR_SET,
  TEXT_SET,
  TEXTURE_SET,
  CONFIGURATION_RESOLVED,
  LOADING_SET,
} from './actions';

const configuratorReducer = (state = {}, action) => {
  switch (action.type) {
    case LOADING_SET: {
      return {
        ...state,
        loading: action.loading,
      };
    }

    case CONFIGURATION_RESOLVED: {
      return { ...state, ...action.configuration, loading: false };
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
