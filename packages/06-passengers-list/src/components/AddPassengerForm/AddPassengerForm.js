import React, { Component } from "react";
import PropTypes from 'prop-types';

import { Form, Button, FormField, Card, CardContent } from "semantic-ui-react";

class AddPassengerForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      age: 0,
    };
  }

  resetForm() {
    this.setState(() => ({
      firstName: '',
      lastName: '',
      age: 0,
    }));
  }

  handleFirstNameChange({ target: { value: firstName } }) {
    this.setState(() => ({ firstName }));
  }

  handleLastNameChange({ target: { value: lastName } }) {
    this.setState(() => ({ lastName }));
  }

  handleAgeChange({ target: { value: age } }) {
    this.setState(() => ({ age }));
  }

  handleSubmit(event) {
    event.preventDefault();

    const { firstName, lastName, age } = this.state;

    const { onSubmit } = this.props;

    if (firstName && lastName && age) {
      onSubmit({ firstName, lastName, age });
      this.resetForm();
    }
  }

  render() {
    const { firstName, lastName, age } = this.state;

    return (
      <Card>
        <CardContent>
          <Form onSubmit={event => this.handleSubmit(event)}>
            <FormField>
              <label>First name</label>
              <input
                required
                type="text"
                name="firstName"
                value={firstName}
                onChange={event => this.handleFirstNameChange(event)}
              />
            </FormField>
            <FormField>
              <label>Last name</label>
              <input
                required
                type="text"
                name="lastName"
                value={lastName}
                onChange={event => this.handleLastNameChange(event)}
              />
            </FormField>
            <FormField>
              <label>Age</label>
              <input
                required
                type="number"
                name="age"
                min={1}
                value={age}
                onChange={event => this.handleAgeChange(event)}
              />
            </FormField>
            <Button primary fluid type="submit">Add</Button>
          </Form>
        </CardContent>
      </Card>
    );
  }
}

AddPassengerForm.propTypes = {
  onSubmit: PropTypes.func,
};

AddPassengerForm.defaultProps = {
  onSubmit: () => undefined,
};

export default AddPassengerForm;
