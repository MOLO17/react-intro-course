import React from 'react';

import PropTypes from 'prop-types';

import { Card, Checkbox, FormField, CardContent } from 'semantic-ui-react';

const PassengerCard = ({ firstName, lastName, age, checkedIn, onCheck }) => (
  <Card>
    <CardContent>
      <FormField
        control={Checkbox}
        label={`${firstName} ${lastName}`}
        onChange={onCheck}
        checked={checkedIn}
      />
    </CardContent>
  </Card>
);

PassengerCard.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  checkedIn: PropTypes.bool,
  onCheck: PropTypes.func,
};

PassengerCard.defaultProps = {
  checkedIn: false,
  onCheck: () => undefined,
};

export default PassengerCard;
