import configureStore from './store';

describe('configure store', () => {
  const configurationService = {};

  const initialState = {
    color: '#ff0000',
    texture: 'DOTTED',
    text: 'Dummy text',
  };

  it('should create a redux store', () => {
    const store = configureStore({ configurationService })(initialState);

    const isStoreValid =
      typeof store.getState === 'function' &&
      typeof store.dispatch === 'function' &&
      typeof store.subscribe === 'function';

    expect(isStoreValid).toBe(true);
  });

  it('should set initial state', () => {
    const store = configureStore({ configurationService })(initialState);

    expect(store.getState()).toBe(initialState);
  });
});
