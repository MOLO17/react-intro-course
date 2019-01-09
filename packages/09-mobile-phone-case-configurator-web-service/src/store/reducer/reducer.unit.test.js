import configuratorReducer from './reducer';
import {
  setConfiguration,
  setColor,
  setTexture,
  setText,
} from '../actions/actions';

describe('reducer', () => {
  describe('set configuration action', () => {
    it('should set configuration value', () => {
      const actualState = {
        color: '#ff0000',
        texture: 'DOTTED',
        text: 'Dummy text',
      };

      const configuration = {
        color: '#00ff00',
        texture: 'STRIPED',
        text: 'Lorem ipsum',
      };

      expect(
        configuratorReducer(actualState, setConfiguration(configuration)),
      ).toEqual(configuration);
    });
  });

  describe('set color action', () => {
    it('should set color value', () => {
      const actualState = {
        color: '#ff0000',
        texture: 'DOTTED',
        text: 'Dummy text',
      };

      expect(configuratorReducer(actualState, setColor('#00ff00'))).toEqual({
        color: '#00ff00',
        texture: 'DOTTED',
        text: 'Dummy text',
      });
    });
  });

  describe('set texture action', () => {
    it('should set texture value', () => {
      const actualState = {
        color: '#ff0000',
        texture: 'DOTTED',
        text: 'Dummy text',
      };

      expect(configuratorReducer(actualState, setTexture('CHECKERED'))).toEqual(
        {
          color: '#ff0000',
          texture: 'CHECKERED',
          text: 'Dummy text',
        },
      );
    });
  });

  describe('set text action', () => {
    it('should set text value', () => {
      const actualState = {
        color: '#ff0000',
        texture: 'DOTTED',
        text: 'Dummy text',
      };

      expect(configuratorReducer(actualState, setText('Lorem ipsum'))).toEqual({
        color: '#ff0000',
        texture: 'DOTTED',
        text: 'Lorem ipsum',
      });
    });
  });

  describe('unknown action', () => {
    it('should leave state unchanged', () => {
      const actualState = {
        color: '#ff0000',
        texture: 'DOTTED',
        text: 'Dummy text',
      };

      expect(configuratorReducer(actualState, { type: 'UNKNOWN_ACTION' })).toBe(
        actualState,
      );
    });
  });

  describe('undefined initial state', () => {
    it('should initialize state', () => {
      expect(
        configuratorReducer(undefined, { type: 'UNKNOWN_ACTION' }),
      ).toEqual({});
    });
  });
});
