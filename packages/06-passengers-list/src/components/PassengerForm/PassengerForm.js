import React, { Component } from 'react';

import PropTypes from 'prop-types';

import {
  Card,
  Form,
  FormInput,
  FormButton,
  CardHeader,
  CardContent,
} from 'semantic-ui-react';

class PassengerForm extends Component {
  constructor(props) {
    super(props);

    const { initialFirstName, initialLastName, initialAge } = props;

    this.state = {
      firstName: initialFirstName,
      lastName: initialLastName,
      age: initialAge,
    };
  }

  handleFirstNameUpdate({ target: { value: firstName } }) {
    if (typeof firstName === 'string') {
      this.setState(() => ({ firstName }));
    }
  }

  handleLastNameUpdate({ target: { value: lastName } }) {
    if (typeof lastName === 'string') {
      this.setState(() => ({ lastName }));
    }
  }

  handleAgeUpdate({ target: { value } }) {
    const age = parseInt(value);

    if (typeof age === 'number' && age >= 0) {
      this.setState(() => ({ age }));
    }
  }

  handleSubmit(event) {
    event.preventDefault();

    const { firstName, lastName, age } = this.state;

    if (firstName.length > 0 && lastName.length > 0 && age >= 0) {
      const { onSubmit } = this.props;

      onSubmit({ firstName, lastName, age });
    }
  }

  render() {
    const { edit, initialFirstName, initialLastName } = this.props;
    const { firstName, lastName, age } = this.state;

    return (
      <Form onSubmit={event => this.handleSubmit(event)}>
        <Card>
          <CardContent>
            <CardHeader>
              {edit
                ? `${initialFirstName} ${initialLastName}`
                : 'New passenger'}
            </CardHeader>
          </CardContent>
          <CardContent>
            <FormInput
              required
              name="firstName"
              label="First Name"
              value={firstName}
              onChange={event => this.handleFirstNameUpdate(event)}
            />
            <FormInput
              required
              name="lastName"
              label="Last Name"
              value={lastName}
              onChange={event => this.handleLastNameUpdate(event)}
            />
            <FormInput
              required
              name="age"
              label="Age"
              type="number"
              value={age}
              onChange={event => this.handleAgeUpdate(event)}
            />
          </CardContent>
          <CardContent extra>
            <FormButton fluid color="green">
              {edit ? 'Update' : 'Embark'}
            </FormButton>
          </CardContent>
        </Card>
      </Form>
    );
  }
}

PassengerForm.propTypes = {
  edit: PropTypes.bool,
  initialFirstName: PropTypes.string,
  initialLastName: PropTypes.string,
  initialAge: PropTypes.number,
  onSubmit: PropTypes.func,
};

PassengerForm.defaultProps = {
  edit: false,
  initialFirstName: '',
  initialLastName: '',
  initialAge: '',
  onSubmit: () => undefined,
};

export default PassengerForm;
