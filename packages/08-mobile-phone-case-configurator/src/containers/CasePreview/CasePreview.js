import React from 'react';

import { connect } from 'react-redux';

import { selectColor, selectText, selectTexture } from '../../store/selectors';

import CellPhoneCase from '../../components/CellPhoneCase/CellPhoneCase';

const mapStateToProps = state => ({
  color: selectColor(state),
  text: selectText(state),
  texture: selectTexture(state),
});

const CasePreview = ({ color, text, texture }) => (
  <div>
    <CellPhoneCase color={color} text={text} texture={texture} />
  </div>
);

export default connect(mapStateToProps)(CasePreview);
