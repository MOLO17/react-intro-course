import fetch from 'node-fetch';
import nock from 'nock';

import configureStore from '../../store/store';
import { saveConfiguration } from '../../store/thunks/thunks';

import createConfigurationService from '../../data/configurationService';

describe('save configuration integration', () => {
  const configuration = {
    color: '#ff0000',
    texture: 'DOTTED',
    text: 'Dummy text',
  };

  const apiUrl = 'https://fake.api';

  global.fetch = fetch;

  const scope = nock(apiUrl)
    .post('/configuration', configuration)
    .reply(200, {});

  const configurationService = createConfigurationService(apiUrl);

  const store = configureStore({ configurationService })(configuration);

  it('should save configuration on save configuration action dispatch', () => {
    return store.dispatch(saveConfiguration()).then(() => {
      expect(scope.isDone()).toBe(true);
    });
  });
});
