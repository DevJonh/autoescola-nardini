import React from 'react';
import PropTypes from 'prop-types';

import FeatureStyles, { IconRoot } from './styles';

const Feature = ({ icon, title, children }) => (
  <FeatureStyles>
    <IconRoot>{icon}</IconRoot>
    <h5>{title}</h5>
    <div>{children}</div>
  </FeatureStyles>
);

Feature.defaultProps = {
  icon: undefined,
  title: '',
  children: undefined,
};

Feature.protoTypes = {
  icon: PropTypes.node,
  title: PropTypes.string,
  children: PropTypes.node,
};
export default Feature;
