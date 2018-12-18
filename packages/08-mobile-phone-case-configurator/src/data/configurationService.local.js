/**
 * Configuration service
 *
 * async getConfiguration(...arg)
 * async setConfiguration(...arg)
 */

const createConfigurationService = storageKey => ({
  getConfiguration: async () => {
    const serializedConfiguration = window.localStorage.getItem(storageKey);

    return JSON.parse(serializedConfiguration);
  },
  setConfiguration: async ({ color, text, texture }) => {
    window.localStorage.setItem(
      storageKey,
      JSON.stringify({ color, text, texture }),
    )
  },
});

export default createConfigurationService;
