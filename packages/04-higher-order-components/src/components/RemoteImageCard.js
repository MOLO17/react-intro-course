import React from 'react';
import PropTypes from 'prop-types';

import ImageCard from './ImageCard';

import withRemoteData from './withRemoteData';

const RemoteImageCard = ({ id, ...props }) => {
  // Create augmented component.
  const AugmentedImageComponent = withRemoteData(
    `https://jsonplaceholder.typicode.com/photos/${id}`,
  )(
    ({ remoteData }) => <ImageCard {...remoteData} />,
  );

  // Render augmented component.
  return <AugmentedImageComponent {...props} />;
};

RemoteImageCard.propTypes = {
  id: PropTypes.number.isRequired,
}

export default RemoteImageCard;
