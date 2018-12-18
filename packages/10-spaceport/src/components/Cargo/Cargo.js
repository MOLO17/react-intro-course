import React from 'react';

import PropTypes from 'prop-types';

import getShadeColor from '../../helpers/getShadeColor';

const Cargo = ({ color, size }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    version="1"
    viewBox="0 0 512 512"
    width={size}
    height={size}
  >
    <path fill="#3c5d76" d="M98 290v92l-45 45v40h211V166z" />
    <path fill="#1e2e3b" d="M414 382v-92L248 166v301h211v-40z" />
    <path
      fill={color}
      d="M339 512V120c0-75-83-120-83-120s-83 45-83 120v392h166z"
    />
    <path
      fill={getShadeColor(color)}
      d="M339 512V120c0-75-83-120-83-120v512h83z"
    />
    <g fill="#1e2e3b">
      <path d="M286 120a30 30 0 0 0-60 0h60zM233 361h45v105h-45z" />
    </g>
    <path fill="#78b9eb" d="M173 467h166v45H173z" />
    <path fill="#5a8bb0" d="M256 467h83v45h-83z" />
  </svg>
);

Cargo.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
};

Cargo.defaultProps = {
  color: '#cce9f9',
  size: 128,
};

export default Cargo;
