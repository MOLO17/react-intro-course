import React from 'react';
import PropTypes from 'prop-types';

import withRemoteData from './withRemoteData';

import ImageCard from './ImageCard';

const RemoteImageCard = ({ id, ...props }) => {
  const AugmentedImageCard = withRemoteData(
    `https://jsonplaceholder.typicode.com/photos/${id}`,
    ({
      title: caption = '...',
      url: src = 'https://via.placeholder.com/320?text=loading',
    } = {}) => ({ ...props, caption, src }),
  )(ImageCard);

  return <AugmentedImageCard />;
};

RemoteImageCard.propTypes = {
  id: PropTypes.number.isRequired,
};

export default RemoteImageCard;
