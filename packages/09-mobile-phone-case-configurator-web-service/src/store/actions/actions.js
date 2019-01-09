/**
 * NOTE: Here we define actions that describe state transformations.
 */

export const CONFIGURATION_SET = 'CONFIGURATION_SET';

export const COLOR_SET = 'COLOR_SET';

export const TEXT_SET = 'TEXT_SET';

export const TEXTURE_SET = 'TEXTURE_SET';

export const setConfiguration = configuration => ({
  type: CONFIGURATION_SET,
  configuration,
});

export const setColor = color => ({ type: COLOR_SET, color });

export const setText = text => ({ type: TEXT_SET, text });

export const setTexture = texture => ({ type: TEXTURE_SET, texture });
