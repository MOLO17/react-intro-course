import {
  CONFIGURATION_SET,
  COLOR_SET,
  TEXTURE_SET,
  TEXT_SET,
  setConfiguration,
  setColor,
  setTexture,
  setText,
} from './actions';

describe('action creators', () => {
  describe('set configuration', () => {
    it('should create a valid action', () => {
      const configuration = {
        color: '#ff0000',
        texture: 'DOTTED',
        text: 'Dummy text',
      };

      expect(setConfiguration(configuration)).toEqual({
        configuration,
        type: CONFIGURATION_SET,
      });
    });
  });

  describe('set color', () => {
    it('should create a valid action', () => {
      const color = '#00ff00';

      expect(setColor(color)).toEqual({
        color,
        type: COLOR_SET,
      });
    });
  });

  describe('set texture', () => {
    it('should create a valid action', () => {
      const texture = 'DOTTED';

      expect(setTexture(texture)).toEqual({
        texture,
        type: TEXTURE_SET,
      });
    });
  });

  describe('set text', () => {
    it('should create a valid action', () => {
      const text = 'Dummy text';

      expect(setText(text)).toEqual({
        text,
        type: TEXT_SET,
      });
    });
  });
});
