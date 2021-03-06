import React from 'react';
import PropTypes from 'prop-types';

import Container from '../Container';

import { RootContainer, Content } from './styles.js';
import Section from '../Section';

const Hero = ({ image, children }) => (
  <RootContainer img={image} data-testid="hero">
    <Container>
      <Content>{children}</Content>
    </Container>
  </RootContainer>
);

Hero.protoTypes = {
  image: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Hero;
