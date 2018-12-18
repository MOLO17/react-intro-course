export const selectConfiguration = state => state;

export const selectColor = state => {
  const { color } = selectConfiguration(state);

  return color;
};

export const selectText = state => {
  const { text } = selectConfiguration(state);

  return text;
};

export const selectTexture = state => {
  const { texture } = selectConfiguration(state);

  return texture;
};

export const selectLoading = state => {
  const { loading } = selectConfiguration(state);

  return loading;
};
