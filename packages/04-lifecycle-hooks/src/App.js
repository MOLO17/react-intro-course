import React from 'react';

import Timer from './components/Timer';

import 'semantic-ui-css/semantic.min.css';
import './App.css';
import { Grid } from 'semantic-ui-react';

const App = () => (
  <Grid centered>
    <Timer />
  </Grid>
);

export default App;
