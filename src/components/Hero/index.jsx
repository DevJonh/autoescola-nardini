import React from "react";
import PropTypes from "prop-types";

import Container from "../Container";

import { RootContainer, Content } from "./styles.js";

const Hero = ({ image, children }) => {
  return (
    <RootContainer img={image} data-testid="hero">
      <Container>
        <Content>{children}</Content>
      </Container>
    </RootContainer>
  );
};

Hero.protoTypes = {
  image: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Hero;
