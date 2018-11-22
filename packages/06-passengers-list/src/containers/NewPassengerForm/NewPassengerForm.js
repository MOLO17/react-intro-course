import React, { Component } from 'react';

import AppContext from '../../contexts/AppContext';
import PassengerForm from '../../components/PassengerForm/PassengerForm';

class NewPassengerForm extends Component {
  static contextType = AppContext;

  handleSubmit(user) {
    const { history } = this.props;
    const { addPassenger } = this.context;

    addPassenger(user);

    history.push('/');
  }

  render() {
    return <PassengerForm onSubmit={user => this.handleSubmit(user)} />;
  }
}

export default NewPassengerForm;
