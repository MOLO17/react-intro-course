const shipsDataSourceFactory = apiUrl => ({
  getShips: async () => {
    const response = fetch(`${apiUrl}/ships`);

    return response.json();
  },
  addShip: async ({ id, category, color }) => {
    const response = fetch(`${apiUrl}/ships/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify({ category, color }),
    });

    return response.json();
  },
  removeShip: async (id) => {
    const response = fetch(`${apiUrl}/ships/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
    });

    return response.json();
  },
});

export default shipsDataSourceFactory;
