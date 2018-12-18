const shipsDataSourceFactory = apiUrl => ({
  /**
   * Get ships list
   */
  getShips: async () => {
    const response = await fetch(`${apiUrl}/ships`);

    return response.json();
  },

  /**
   * Add ship to list
   */
  addShip: async ({ category, color }) => {
    const response = await fetch(`${apiUrl}/ships`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify({ category, color }),
    });

    return response.json();
  },

  /**
   * Edit specific ship
   */
  editShip: async (id, { category, color }) => {
    const response = await fetch(`${apiUrl}/ships/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify({
        ...(typeof category === 'string' ? { category } : {}),
        ...(typeof color === 'string' ? { color } : {}),
      }),
    });

    return response.json();
  },

  /**
   * Remove specific ship
   */
  removeShip: async id => {
    const response = await fetch(`${apiUrl}/ships/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
    });

    return response.json();
  },
});

export default shipsDataSourceFactory;
