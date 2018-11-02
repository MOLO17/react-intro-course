import React from "react";
import { PropTypes } from "prop-types";

const ImageCard = ({ title, url }) => (
  <div className="image-card">
    <h4>{title}</h4>
    <img src={url} alt={title} />
  </div>
);

ImageCard.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string
};

ImageCard.defaultProps = {
  title: "Loading...",
  url: "https://via.placeholder.com/600?text=no%20image"
};

export default ImageCard;
