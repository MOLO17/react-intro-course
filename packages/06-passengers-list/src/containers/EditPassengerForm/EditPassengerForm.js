import React, { Component } from 'react';

import { Route, Redirect } from 'react-router-dom';

import AppContext from '../../contexts/AppContext';
import PassengerForm from '../../components/PassengerForm/PassengerForm';

class EditPassengerForm extends Component {
  static contextType = AppContext;

  render() {
    const { passengersList } = this.context;
    const {
      match: {
        params: { passengerId },
      },
    } = this.props;

    const passengerData = passengersList.find(
      ({ id }) => `${id}` === passengerId,
    );

    return passengerData ? (
      <Route
        component={() => (
          <PassengerForm
            edit
            initialFirstName={passengerData.firstName}
            initialLastName={passengerData.lastName}
            initialAge={passengerData.age}
          />
        )}
      />
    ) : (
      <Redirect to="/" />
    );
  }
}

export default EditPassengerForm;
