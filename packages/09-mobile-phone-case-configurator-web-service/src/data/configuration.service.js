const createConfigurationService = () => ({
  retrieveConfiguration: async () => {
    const response = await fetch('http://localhost:3001/configuration');

    return response.json();
  },
  updateConfiguration: async ({ color, text, texture }) => {
    const response = await fetch('http://localhost:3001/configuration', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ color, text, texture }),
    });

    return response.json();
  },
});

export default createConfigurationService;
