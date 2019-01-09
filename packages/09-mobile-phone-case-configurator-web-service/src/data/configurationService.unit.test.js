import nock from 'nock';
import createConfigurationService from './configurationService';
import fetch from 'node-fetch';

describe('create configuration service', () => {
  const apiUrl = 'https://fake.api';

  const configuration = {
    color: '#ff0000',
    texture: 'DOTTED',
    text: 'Dummy text',
  };

  beforeAll(() => {
    global.fetch = fetch;
  });

  describe('load configuration', () => {
    nock(apiUrl)
      .get('/configuration')
      .reply(200, configuration);

    it('should send an API call and return a configuration', () => {
      const configurationService = createConfigurationService(apiUrl);

      return expect(configurationService.loadConfiguration()).resolves.toEqual(
        configuration,
      );
    });
  });

  describe('save configuration', () => {
    nock(apiUrl)
      .post('/configuration', configuration)
      .reply(200, {});

    it('should send an API call and save configuration', () => {
      const configurationService = createConfigurationService(apiUrl);

      return expect(
        configurationService.saveConfiguration(configuration),
      ).resolves.toBe(undefined);
    });
  });
});
