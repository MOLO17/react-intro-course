import React from 'react';

import PropTypes from 'prop-types';

import getShadeColor from '../../helpers/getShadeColor';

const Capsule = ({ color, size }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    version="1"
    viewBox="0 0 512 512"
    width={size}
    height={size}
  >
    <path fill="#5a8bb0" d="M282 282h197v53H282z" />
    <path fill="#78b9eb" d="M20 282h197v53H20z" />
    <path
      fill="#1e2e3b"
      d="M315 250v118h197V250H315zm39 79v-40h40v40h-40zm119 0h-40v-40h40v40z"
    />
    <path
      fill="#3c5d76"
      d="M0 250v118h197V250H0zm39 79v-40h40v40H39zm119 0h-40v-40h40v40z"
    />
    <path fill={color} d="M158 203v197h196V203l-45-91H203z" />
    <path fill={getShadeColor(color)} d="M256 400h98V203l-45-91h-53z" />
    <circle cx="256" cy="282" r="26" fill="#3c5d76" />
    <path fill="#1e2e3b" d="M256 256a26 26 0 1 1 0 53" />
  </svg>
);

Capsule.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
};

Capsule.defaultProps = {
  color: '#cce9f9',
  size: 128,
};

export default Capsule;
