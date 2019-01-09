import React from 'react';

import { connect } from 'react-redux';

import { selectColor, selectText, selectTexture } from '../../store/selectors';
import {
  setColor,
  setText,
  setTexture,
  saveConfiguration,
} from '../../store/actions';

import ColorSelector from '../../components/ColorSelector/ColorSelector';

import './ConfigurationForm.css';

const mapStateToProps = state => ({
  color: selectColor(state),
  text: selectText(state),
  texture: selectTexture(state),
});

const mapDispatchToProps = dispatch => ({
  changeColor: color => {
    dispatch(setColor(color));
    dispatch(saveConfiguration());
  },
  changeText: text => {
    dispatch(setText(text));
    dispatch(saveConfiguration());
  },
  changeTexture: texture => {
    dispatch(setTexture(texture));
    dispatch(saveConfiguration());
  },
});

const ConfigurationForm = ({
  color,
  text,
  texture,
  changeColor,
  changeText,
  changeTexture,
}) => (
  <div className="configuration-form">
    <input
      type="text"
      value={text}
      placeholder="Custom text"
      onChange={({ target: { value } }) => changeText(value)}
    />
    <select
      value={texture}
      onChange={({ target: { value } }) => changeTexture(value)}
    >
      <option value="NONE">No texture</option>
      <option value="DOTTED">Dotted</option>
      <option value="STRIPED">Striped</option>
      <option value="CHECKERED">Checkered</option>
    </select>
    <ColorSelector onChange={changeColor} />
  </div>
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ConfigurationForm);
