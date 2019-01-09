const createConfigurationService = apiUrl => ({
  loadConfiguration: async () => {
    const response = await fetch(`${apiUrl}/configuration`);

    return response.json();
  },
  saveConfiguration: async ({ color, text, texture }) => {
    const response = await fetch(`${apiUrl}/configuration`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ color, text, texture }),
    });

    return response.json().then(() => undefined);
  },
});

export default createConfigurationService;
