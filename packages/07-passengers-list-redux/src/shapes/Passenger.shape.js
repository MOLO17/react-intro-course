import PropTypes from 'prop-types';

export default {
  id: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  birthDate: PropTypes.instanceOf(Date).isRequired,
};
