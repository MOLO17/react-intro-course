import React from 'react';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { Box } from 'rebass';

import PassengerShape from '../../shapes/Passenger.shape';

import PassengerCard from '../../components/PassengerCard/PassengerCard';

import { selectPassengers } from '../../store/selectors';

/**
 * NOTE: don't do this! Use a selector instead
 *
 * const mapStateToProps = state => ({
 *   passengers: state.passengers.map(({ birthTimestamp, ...passenger }) => ({
 *     ...passenger,
 *     birthDate: new Date(birthTimestamp),
 *   })),
 * });
 */

const mapStateToProps = state => ({
  passengers: selectPassengers(state),
});

const PassengersList = ({ passengers }) => (
  <Box p="16px">
    {passengers.map(({ id, ...passenger }) => (
      <PassengerCard key={id} id={id} {...passenger} />
    ))}
  </Box>
);

PassengersList.propTypes = {
  passengers: PropTypes.arrayOf(PropTypes.shape(PassengerShape)),
};

PassengersList.defaultProps = {
  passengers: [],
};

export default connect(mapStateToProps)(PassengersList);
