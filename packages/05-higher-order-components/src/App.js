import React from 'react';

import './App.css';

import RemoteImageCard from './components/RemoteImageCard';
import { Grid, Container, GridColumn } from 'semantic-ui-react';
import ImageCard from './components/ImageCard';
import RemoteUserList from './components/RemoteUserList';

const IMAGES_IDS = [...Array(3)].map((_, index) => index + 1);

const App = () => (
  <Container>
    <RemoteUserList limit={4} />
    <Grid stackable centered columns={4}>
      <GridColumn>
        <ImageCard
          src="https://via.placeholder.com/320/e30613?text=Simple%20image"
          caption="I'm a simple ImageCard!"
        />
      </GridColumn>
      {IMAGES_IDS.map(id => (
        <GridColumn key={id}>
          <RemoteImageCard id={id} />
        </GridColumn>
      ))}
    </Grid>
  </Container>
);

export default App;
