import React from 'react';
import PropTypes from 'prop-types';

const Caption = ({ prominence, children }) => {
  switch(prominence) {
    case 1: {
      return <h1>{children}</h1>;
    }

    case 2: {
      return <h2>{children}</h2>;
    }

    case 3: {
      return <h3>{children}</h3>;
    }

    case 4: {
      return <h4>{children}</h4>;
    }

    case 5: {
      return <h5>{children}</h5>;
    }

    default: {
      return <h6>{children}</h6>;
    }
  }
}

Caption.propTypes = {
  prominence: PropTypes.number,
  children: PropTypes.node,
}

Caption.defaultProps = {
  prominence: 6,
  children: null,
}

export default Caption;
