import React, { Component } from 'react';

import PropTypes from 'prop-types';

import { Card, Button, Flex } from 'rebass';

class PassengerForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      birthDate: '',
    };
  }

  handleFieldChange(key) {
    return ({ target: { value } }) => {
      this.setState(() => ({ [key]: value }));
    };
  }

  handleSubmit(event) {
    event.preventDefault();

    const { onSubmit } = this.props;

    const { firstName, lastName, birthDate } = this.state;

    onSubmit({ firstName, lastName, birthDate: new Date(birthDate) });
  }

  render() {
    const { firstName, lastName, birthDate } = this.state;

    return (
      <Card p="16px" mb="16px" border="1px solid lightgray" borderRadius={4}>
        <form onSubmit={event => this.handleSubmit(event)}>
          <Flex flexDirection="column">
            <input
              required
              type="text"
              value={firstName}
              onChange={this.handleFieldChange('firstName')}
            />
            <input
              required
              type="text"
              value={lastName}
              onChange={this.handleFieldChange('lastName')}
            />
            <input
              required
              type="date"
              value={birthDate}
              onChange={this.handleFieldChange('birthDate')}
            />

            <Button mt="16px" type="submit">
              Submit
            </Button>
          </Flex>
        </form>
      </Card>
    );
  }
}

PassengerForm.propTypes = {
  onSubmit: PropTypes.func,
};

PassengerForm.defaultProps = {
  onSubmit: () => undefined,
};

export default PassengerForm;
