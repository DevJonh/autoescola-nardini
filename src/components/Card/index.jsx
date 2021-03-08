import React from "react";
import PropTypes from "prop-types";

import { Body, CardRoot, Media, MediaDescription } from "./styles";

export const CardBody = ({ children }) => <Body>{children}</Body>;
export const CardMedia = ({ img, children }) => (
  <Media image={img}>{children}</Media>
);

export const CardMediaDescription = ({ children }) => (
  <MediaDescription>{children}</MediaDescription>
);

const Card = ({ children }) => <CardRoot>{children}</CardRoot>;

Card.defaultProps = {
  children: undefined,
};
CardBody.defaultProps = {
  children: undefined,
};
CardMediaDescription.defaultProps = {
  children: undefined,
};
CardMedia.defaultProps = {
  img: undefined,
  children: undefined,
};

Card.protoTypes = {
  children: PropTypes.node,
};
CardMedia.protoTypes = {
  img: PropTypes.string,
  children: PropTypes.node,
};
CardMediaDescription.protoTypes = {
  children: PropTypes.node,
};
CardBody.protoTypes = {
  children: PropTypes.node,
};

export default Card;
