import { saveConfiguration, loadConfiguration } from './thunks';
import { setConfiguration } from '../actions/actions';

describe('thunks', () => {
  const configuration = {
    color: '#ff0000',
    texture: 'DOTTED',
    text: 'Dummy text',
  };

  const dispatch = jest.fn(() => undefined);

  const getState = jest.fn(() => configuration);

  const configurationService = {
    saveConfiguration: jest.fn(async configuration => undefined),
    loadConfiguration: jest.fn(async () => configuration),
  };

  describe('save configuration', () => {
    it('should invoke saveConfiguration method with state configuation value', () => {
      return saveConfiguration()(dispatch, getState, {
        configurationService,
      }).then(() => {
        expect(configurationService.saveConfiguration).toBeCalledWith(
          configuration,
        );
      });
    });
  });

  describe('load configuration', () => {
    it('should invoke loadConfiguration method', () => {
      return loadConfiguration()(dispatch, getState, {
        configurationService,
      }).then(() => {
        expect(configurationService.loadConfiguration).toBeCalled();
      });
    });

    it('should dispatch a setConfiguration action', () => {
      return loadConfiguration()(dispatch, getState, {
        configurationService,
      }).then(() => {
        expect(dispatch).toBeCalledWith(setConfiguration(configuration));
      });
    });
  });
});
