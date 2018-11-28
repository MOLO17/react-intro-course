import React from 'react';

import { Provider } from 'react-redux';

import uuid from 'uuid/v4';

import { Box, Flex } from 'rebass';

import configureStore from '../../store/configureStore';

import PassengersList from '../PassengersList/PassengersList';
import AddPassengerForm from '../AddPassengerForm/AddPassengerForm';

import './App.css';

const store = configureStore({
  passengers: [
    {
      id: uuid(),
      firstName: 'John',
      lastName: 'Doe',
      birthTimestamp: 0,
    },
  ],
});

const App = () => (
  <Provider store={store}>
    <Flex>
      <Box width={320}>
        <PassengersList />
      </Box>
      <Box width={320}>
        <AddPassengerForm />
      </Box>
    </Flex>
  </Provider>
);

export default App;
