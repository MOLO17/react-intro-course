import React from 'react';

import { connect } from 'react-redux';

import { getColor, getText, getTexture } from '../../store/selectors/selectors';

import CellPhoneCase from '../../components/CellPhoneCase/CellPhoneCase';

const mapStateToProps = state => ({
  color: getColor(state),
  text: getText(state),
  texture: getTexture(state),
});

const CasePreview = ({ color, text, texture }) => (
  <div>
    <CellPhoneCase color={color} text={text} texture={texture} />
  </div>
);

export default connect(mapStateToProps)(CasePreview);
