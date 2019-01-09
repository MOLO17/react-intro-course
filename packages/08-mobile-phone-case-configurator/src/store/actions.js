import { selectColor, selectText, selectTexture } from './selectors';

/**
 * NOTE: Here we define actions that describe state transformations.
 */

////////////////////////////////////////////////////////////////////////////////////////////////////
// Action types.
////////////////////////////////////////////////////////////////////////////////////////////////////
export const CONFIGURATION_SET = 'CONFIGURATION_SET';

export const COLOR_SET = 'COLOR_SET';

export const TEXT_SET = 'TEXT_SET';

export const TEXTURE_SET = 'TEXTURE_SET';

export const LOADING_SET = 'LOADING_SET';

////////////////////////////////////////////////////////////////////////////////////////////////////
// Action creators
////////////////////////////////////////////////////////////////////////////////////////////////////
export const setConfiguration = configuration => ({
  type: CONFIGURATION_SET,
  configuration,
});

export const setColor = color => ({ type: COLOR_SET, color });

export const setText = text => ({ type: TEXT_SET, text });

export const setTexture = texture => ({ type: TEXTURE_SET, texture });

export const setLoading = loading => ({ type: LOADING_SET, loading });

////////////////////////////////////////////////////////////////////////////////////////////////////
// Async action creators
////////////////////////////////////////////////////////////////////////////////////////////////////
export const loadConfiguration = () => {
  return async (dispatch, _, { configurationService }) => {
    dispatch(setLoading(true));

    const configuration = await configurationService.getConfiguration();

    dispatch(setConfiguration(configuration));
  };
};

export const saveConfiguration = () => {
  return async (_, getState, { configurationService }) => {
    const state = getState();

    configurationService.setConfiguration({
      color: selectColor(state),
      text: selectText(state),
      texture: selectTexture(state),
    });
  };
};
