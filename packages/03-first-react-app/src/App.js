import React from 'react';

import Counter from './components/Counter';
import Caption from './components/Caption';

import './App.css';

const App = ({ name }) => (
  <div className="App">
    <Caption prominence={1}>Hello {name}!</Caption>
    <Counter />
  </div>
);

export default App;
