import React from 'react';

import PropTypes from 'prop-types';

import {
  Card,
  CardHeader,
  CardMeta,
  CardContent,
  Button,
  Icon,
} from 'semantic-ui-react';

const PassengerListItem = ({ firstName, lastName, age, onEditButtonClick }) => (
  <Card fluid>
    <CardContent>
      <Button icon basic floated="right" onClick={onEditButtonClick}>
        <Icon name="cog" />
      </Button>
      <CardHeader>
        {firstName} {lastName}
      </CardHeader>
      <CardMeta>{age} anni</CardMeta>
    </CardContent>
    <CardContent extra>
      <Button basic fluid color="red">
        Disembark
      </Button>
    </CardContent>
  </Card>
);

PassengerListItem.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  onEditButtonClick: PropTypes.func,
};

PassengerListItem.defaultProps = {
  onEditButtonClick: () => undefined,
};

export default PassengerListItem;
