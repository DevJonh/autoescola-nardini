import React from 'react';
import PropTypes from 'prop-types';

import { Body, CardRoot, Media } from './styles';

export const CardBody = ({ children }) => <Body>{children}</Body>;
export const CardMedia = ({ img }) => <Media image={img} />;

const Card = ({ children }) => <CardRoot>{children}</CardRoot>;

Card.defaultProps = {
  children: undefined,
};
CardBody.defaultProps = {
  children: undefined,
};
CardMedia.defaultProps = {
  img: undefined,
};

Card.protoTypes = {
  children: PropTypes.node,
};
CardMedia.protoTypes = {
  img: PropTypes.string,
};
CardBody.protoTypes = {
  children: PropTypes.node,
};

export default Card;
