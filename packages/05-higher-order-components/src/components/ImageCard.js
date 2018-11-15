import React from "react";
import { PropTypes } from "prop-types";

import { Card, CardHeader, Image, CardContent } from "semantic-ui-react";

const ImageCard = ({ caption, src }) => (
  <Card>
    <Image style={{ width: 320, height: 320 }} src={src} alt={caption} />
    <CardContent>
      <CardHeader textAlign="left">{caption}</CardHeader>
    </CardContent>
  </Card>
);

ImageCard.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string
};

export default ImageCard;
