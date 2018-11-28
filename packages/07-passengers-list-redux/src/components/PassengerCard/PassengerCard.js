import React from 'react';

import { Card, Box, Flex, Heading, Text } from 'rebass';

import PassengerShape from '../../shapes/Passenger.shape';

const PassengerCard = ({ firstName, lastName, birthDate }) => (
  <Card p="16px" mb="16px" border="1px solid lightgray" borderRadius={4}>
    <Flex>
      <Box mr="16px">
        <Heading mb="4px">
          {firstName} {lastName}
        </Heading>
        <Text>{birthDate.toLocaleDateString()}</Text>
      </Box>
    </Flex>
  </Card>
);

PassengerCard.propTypes = PassengerShape;

export default PassengerCard;
