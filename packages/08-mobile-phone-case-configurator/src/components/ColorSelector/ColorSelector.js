import React from 'react';

import PropTypes from 'prop-types';

import './ColorSelector.css';

const COLORS = [
  '#FA7268',
  '#3C539A',
  '#FEDD00',
  '#259490',
  '#F0F0F0',
  '#424242',
];

const ColorSelector = ({ onChange }) => (
  <div className="color-selector">
    {COLORS.map(color => (
      <button
        key={color}
        style={{ backgroundColor: color }}
        onClick={() => onChange(color)}
      />
    ))}
  </div>
);

ColorSelector.propTypes = {
  onChange: PropTypes.func,
};

ColorSelector.defaultProps = {
  onChange: () => undefined,
};

export default ColorSelector;
