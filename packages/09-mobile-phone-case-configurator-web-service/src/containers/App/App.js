import React from 'react';

import { connect } from 'react-redux';

import CasePreview from '../CasePreview/CasePreview';
import ConfigurationForm from '../ConfigurationForm/ConfigurationForm';

import { selectLoading } from '../../store/selectors';

import './App.css';

const mapStateToProps = state => ({ loading: selectLoading(state) });

const App = ({ loading }) => (
  <div className="app">
    {loading ? null : (
      <>
        <ConfigurationForm />
        <CasePreview />
      </>
    )}
  </div>
);

export default connect(mapStateToProps)(App);
