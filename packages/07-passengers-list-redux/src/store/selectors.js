/**
 * NOTE: here we define selectors, simple functions that specify how to retrieve data from app
 * state.
 */

export const selectPassengers = state =>
  state.passengers.map(({ birthTimestamp, ...passenger }) => ({
    ...passenger,
    birthDate: new Date(birthTimestamp),
  }));
