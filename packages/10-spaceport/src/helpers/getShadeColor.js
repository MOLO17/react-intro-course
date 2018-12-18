import Color from 'color';

const getShadeColor = color => {
  const mainColor = new Color(color);

  return (mainColor.isDark()
    ? mainColor.lighten(0.25).desaturate(0.25)
    : mainColor.darken(0.25).desaturate(0.25)
  ).hex();
};

export default getShadeColor;
