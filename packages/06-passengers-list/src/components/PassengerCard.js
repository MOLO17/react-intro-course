import React from "react";

import PropTypes from "prop-types";

import "./PassengerCard.css";

const PassengerCard = ({ firstName, lastName, age, checkedIn, onCheck }) => (
  <div className={`passenger-card ${checkedIn ? "checked-in" : ""}`}>
    <div
      className="checkbox"
      role="checkbox"
      tabIndex={0}
      aria-checked={checkedIn}
      onClick={onCheck}
    />
    <div className="name">
      {firstName} {lastName}
    </div>
    {age < 18 ? <div className="reduced">Reduced</div> : null}
  </div>
);

PassengerCard.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  checkedIn: PropTypes.bool,
  onCheck: PropTypes.func
};

PassengerCard.defaultProps = {
  checkedIn: false,
  onCheck: () => undefined
};

export default PassengerCard;
