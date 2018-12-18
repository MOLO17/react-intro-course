import React from 'react';

import PropTypes from 'prop-types';

import getShadeColor from '../../helpers/getShadeColor';

const Fighter = ({ color, size }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    version="1"
    viewBox="0 0 512 512"
    width={size}
    height={size}
  >
    <path fill="#3c5d76" d="M168 388h44v73h-44z" />
    <path fill="#1e2e3b" d="M300 388h44v73h-44z" />
    <g fill="#3c5d76">
      <path d="M0 124h44v336H0zM88 168h44v234H88z" />
    </g>
    <path fill="#5a8bb0" d="M0 325v92h263V289z" />
    <g fill="#1e2e3b">
      <path d="M468 124h44v336h-44zM380 168h44v234h-44z" />
    </g>
    <path fill="#3c5d76" d="M249 289v128h263v-92z" />
    <circle cx="256" cy="432" r="29" fill="#ffda44" />
    <path
      fill="#ff9811"
      d="M191 373v38c0 58 65 94 65 94s65-36 65-94v-38H191zm65 77c-9-9-18-20-20-33l20-15 20 15c-2 13-11 24-20 33z"
    />
    <path
      fill="#ff5023"
      d="M256 373v44h20c-2 13-11 24-20 33v55s65-36 65-94v-38h-65z"
    />
    <path
      fill={color}
      d="M344 417l-29-88V92c0-53-59-85-59-85s-59 32-59 85v237l-29 88h176z"
    />
    <path
      fill={getShadeColor(color)}
      d="M344 417l-29-88V92c0-53-59-85-59-85v410h88z"
    />
    <path fill="#1e2e3b" d="M234 271h44v102h-44z" />
  </svg>
);

Fighter.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
};

Fighter.defaultProps = {
  color: '#cce9f9',
  size: 128,
};

export default Fighter;
