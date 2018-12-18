import React from 'react';

import Color from 'color';

import PropTypes from 'prop-types';

import checkeredTexture from './textures/Checkered.svg';
import stripedTexture from './textures/Striped.svg';
import dottedTexture from './textures/Dotted.svg';

import './CellPhoneCase.css';

const TEXTURE_MAP = {
  DOTTED: dottedTexture,
  STRIPED: stripedTexture,
  CHECKERED: checkeredTexture,
};

const CellPhoneCase = ({ color, text, texture }) => (
  <div
    className="cell-phone-case"
    style={{
      backgroundColor: color,
      ...(typeof TEXTURE_MAP[texture] === 'string'
        ? { backgroundImage: `url('${TEXTURE_MAP[texture]}')` }
        : {}),
    }}
  >
    <span
      style={{
        backgroundColor: color,
        color: new Color(color).isDark() ? 'white' : 'black',
      }}
    >
      {text}
    </span>
  </div>
);

CellPhoneCase.propTypes = {
  color: PropTypes.string.isRequired,
  text: PropTypes.string,
  texture: PropTypes.oneOf(['NONE', 'DOTTED', 'STRIPED', 'CHECKERED']),
};

CellPhoneCase.defaultProps = {
  text: '',
  texture: undefined,
};

export default CellPhoneCase;
