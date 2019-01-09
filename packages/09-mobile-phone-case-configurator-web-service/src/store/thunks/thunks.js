/**
 * NOTE: Here we define thunks that allow us to perform side effects.
 */

import { setConfiguration } from '../actions/actions';

import { getConfiguration } from '../selectors/selectors';

export const saveConfiguration = () => async (
  dispatch,
  getState,
  { configurationService },
) => configurationService.saveConfiguration(getConfiguration(getState()));

export const loadConfiguration = () => async (
  dispatch,
  getState,
  { configurationService },
) => dispatch(setConfiguration(await configurationService.loadConfiguration()));
