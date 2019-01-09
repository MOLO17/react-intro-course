/**
 * Configuration service
 *
 * async getConfiguration(...arg)
 * async setConfiguration(...arg)
 */

const createConfigurationService = apiUrl => ({
  getConfiguration: async () => {
    const response = await fetch(`${apiUrl}/configuration`);

    return response.json();
  },
  setConfiguration: async ({ color, text, texture }) => {
    const response = await fetch(`${apiUrl}/configuration`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ color, text, texture }),
    });

    response.json();
  },
});

export default createConfigurationService;
