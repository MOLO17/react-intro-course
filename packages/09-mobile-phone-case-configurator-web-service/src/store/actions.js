import { selectConfiguration } from './selectors';

/**
 * NOTE: Here we define actions that describe state transformations.
 */

////////////////////////////////////////////////////////////////////////////////////////////////////
// Action types.
////////////////////////////////////////////////////////////////////////////////////////////////////
export const COLOR_SET = 'COLOR_SET';

export const TEXT_SET = 'TEXT_SET';

export const TEXTURE_SET = 'TEXTURE_SET';

export const LOADING_SET = 'CONFIGURATION_REQUIRED';

export const CONFIGURATION_RESOLVED = 'CONFIGURATION_RESOLVED';

////////////////////////////////////////////////////////////////////////////////////////////////////
// Action creators
////////////////////////////////////////////////////////////////////////////////////////////////////
export const resolveConfiguration = configuration => ({
  type: CONFIGURATION_RESOLVED,
  configuration,
});

export const setLoading = loading => ({
  type: LOADING_SET,
  loading,
});

export const setColor = color => ({ type: COLOR_SET, color });

export const setText = text => ({ type: TEXT_SET, text });

export const setTexture = texture => ({ type: TEXTURE_SET, texture });

////////////////////////////////////////////////////////////////////////////////////////////////////
// Async actions
////////////////////////////////////////////////////////////////////////////////////////////////////
export const saveConfiguration = () => async (
  _,
  getState,
  { configurationService },
) => {
  const state = getState();

  configurationService.updateConfiguration(selectConfiguration(state));
};

export const loadConfiguration = () => async (
  dispatch,
  getState,
  { configurationService },
) => {
  dispatch(setLoading(true));

  const configuration = await configurationService.retrieveConfiguration();

  dispatch(resolveConfiguration(configuration));
};
