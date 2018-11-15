import React from "react";
import PropTypes from "prop-types";

import withRemoteData from "./withRemoteData";

import ImageCard from "./ImageCard";

const RemoteImageCard = ({ id, ...props }) => {
  const AugmentedImageCard = withRemoteData(
    `https://jsonplaceholder.typicode.com/photos/${id}`,
    ({
      title: caption = "Loading...",
      url: src = "https://via.placeholder.com/600?text=no%20image"
    } = {}) => ({ ...props, caption, src })
  )(ImageCard);

  return <AugmentedImageCard />;
};

RemoteImageCard.propTypes = {
  id: PropTypes.number.isRequired
};

export default RemoteImageCard;
