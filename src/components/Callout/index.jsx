import React from "react";
import PropTypes from "prop-types";

import { StyledCallout, StyledCalloutBody, StyledCalloutMedia } from "./styles";

export const CalloutBody = ({ children }) => (
  <StyledCalloutBody>{children}</StyledCalloutBody>
);
export const CalloutMedia = ({ children }) => (
  <StyledCalloutMedia>{children}</StyledCalloutMedia>
);

const Callout = ({ children }) => <StyledCallout>{children}</StyledCallout>;

CalloutBody.defaultProps = {
  children: undefined,
};
CalloutMedia.defaultProps = {
  children: undefined,
};
Callout.defaultProps = {
  children: undefined,
};

CalloutBody.protoTypes = {
  children: PropTypes.node,
};
CalloutMedia.protoTypes = {
  children: PropTypes.node,
};
Callout.protoTypes = {
  children: PropTypes.node,
};

export default Callout;
