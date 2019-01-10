import fetch from 'node-fetch';
import nock from 'nock';

import configureStore from '../../store/store';
import { loadConfiguration } from '../../store/thunks/thunks';

import createConfigurationService from '../../data/configurationService';

describe('load configuration integration', () => {
  it('should load remote configuration on load configuration action dispatch', () => {
    const configuration = {
      color: '#ff0000',
      texture: 'DOTTED',
      text: 'Dummy text',
    };

    const apiUrl = 'https://fake.api';

    global.fetch = fetch;

    nock(apiUrl)
      .get('/configuration')
      .reply(200, configuration);

    const configurationService = createConfigurationService(apiUrl);

    const store = configureStore({ configurationService })({});

    return store.dispatch(loadConfiguration()).then(() => {
      expect(store.getState()).toEqual(configuration);
    });
  });
});
