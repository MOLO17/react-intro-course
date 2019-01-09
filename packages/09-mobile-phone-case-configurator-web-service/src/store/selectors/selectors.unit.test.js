import { getConfiguration, getColor, getTexture, getText } from './selectors';

describe('selectors', () => {
  const color = '#ff0000';
  const texture = 'DOTTED';
  const text = 'Dummy text';

  const state = { color, texture, text };

  describe('get configuration', () => {
    it('should return the configuration value', () => {
      expect(getConfiguration(state)).toEqual(state);
    });
  });

  describe('get color', () => {
    it('should return the color value', () => {
      expect(getColor(state)).toEqual(color);
    });
  });

  describe('get texture', () => {
    it('should return the texture value', () => {
      expect(getTexture(state)).toEqual(texture);
    });
  });

  describe('get text', () => {
    it('should return the text value', () => {
      expect(getText(state)).toEqual(text);
    });
  });
});
