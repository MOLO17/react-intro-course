import React from 'react';

import { Provider } from 'react-redux';

import configureStore from '../../store/store';

import CasePreview from '../CasePreview/CasePreview';
import ConfigurationForm from '../ConfigurationForm/ConfigurationForm';

import './App.css';

const store = configureStore({
  color: '#FA7268',
  text: '',
});

const App = () => (
  <Provider store={store}>
    <div className="app">
      <ConfigurationForm />
      <CasePreview />
    </div>
  </Provider>
);

export default App;
