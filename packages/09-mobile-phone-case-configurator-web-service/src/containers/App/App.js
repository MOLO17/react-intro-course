import React from 'react';

import CasePreview from '../CasePreview/CasePreview';
import ConfigurationForm from '../ConfigurationForm/ConfigurationForm';

import './App.css';

const App = () => (
  <div className="app">
    <>
      <ConfigurationForm />
      <CasePreview />
    </>
  </div>
);

export default App;
