import { createSelector } from 'reselect';

export const getConfiguration = state => state;

export const getColor = createSelector(getConfiguration, state => state.color);

export const getTexture = createSelector(
  getConfiguration,
  state => state.texture,
);

export const getText = createSelector(getConfiguration, state => state.text);
