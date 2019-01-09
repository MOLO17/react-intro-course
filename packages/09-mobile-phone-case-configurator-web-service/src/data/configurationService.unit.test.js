import fetch from 'node-fetch';
import nock from 'nock';

import createConfigurationService from './configurationService';

describe('create configuration service', () => {
  const configuration = {
    color: '#ff0000',
    texture: 'DOTTED',
    text: 'Dummy text',
  };

  const apiUrl = 'https://fake.api';

  beforeAll(() => {
    global.fetch = fetch;

    nock(apiUrl)
      .get('/configuration')
      .reply(200, configuration);

    nock(apiUrl)
      .post('/configuration', configuration)
      .reply(200, {});
  });

  describe('load configuration', () => {
    it('should send an API call and return a configuration', () => {
      const configurationService = createConfigurationService(apiUrl);

      return expect(configurationService.loadConfiguration()).resolves.toEqual(
        configuration,
      );
    });
  });

  describe('save configuration', () => {
    it('should send an API call and save configuration', () => {
      const configurationService = createConfigurationService(apiUrl);

      return expect(
        configurationService.saveConfiguration(configuration),
      ).resolves.toBe(undefined);
    });
  });
});
