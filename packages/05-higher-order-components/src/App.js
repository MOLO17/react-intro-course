import React from "react";

import "./App.css";

import RemoteImageCard from "./components/RemoteImageCard";
import { Grid, Container, GridColumn } from "semantic-ui-react";

const IMAGES_IDS = [...Array(3)].map((_, index) => index + 1);

const App = () => (
  <Container>
    <Grid stackable centered columns={3}>
      {IMAGES_IDS.map(id => (
        <GridColumn>
          <RemoteImageCard id={id} />
        </GridColumn>
      ))}
    </Grid>
  </Container>
);

export default App;
