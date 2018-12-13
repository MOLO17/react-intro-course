import React from 'react';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import uuid from 'uuid/v4';

import { Box } from 'rebass';

import PassengerShape from '../../shapes/Passenger.shape';

import { addPassenger } from '../../store/actions';

import PassengerForm from '../../components/PassengerForm/PassengerForm';

const mapDispatchToProps = dispatch => ({
  addPassenger: ({ birthDate, ...passenger }) =>
    dispatch(
      addPassenger({
        id: uuid(),
        birthTimestamp: birthDate.getTime(),
        ...passenger,
      }),
    ),
});

const AddPassengerForm = ({ addPassenger }) => (
  <Box p="16px">
    <PassengerForm onSubmit={addPassenger} />
  </Box>
);

AddPassengerForm.propTypes = {
  passengers: PropTypes.arrayOf(PropTypes.shape(PassengerShape)),
};

AddPassengerForm.defaultProps = {
  passengers: [],
};

export default connect(
  undefined,
  mapDispatchToProps,
)(AddPassengerForm);
