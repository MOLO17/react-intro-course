import React from 'react';

import { connect } from 'react-redux';

import CasePreview from '../CasePreview/CasePreview';
import ConfigurationForm from '../ConfigurationForm/ConfigurationForm';

import './App.css';

import { selectLoading } from '../../store/selectors';

const mapStateToProps = state => ({
  loading: selectLoading(state),
});

const App = ({ loading }) =>
  loading ? (
    <div>loading...</div>
  ) : (
    <div className="app">
      <ConfigurationForm />
      <CasePreview />
    </div>
  );

export default connect(mapStateToProps)(App);
