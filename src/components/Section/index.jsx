import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

import Container from "../Container";

const Content = styled.div`
  padding: 40px 0;
  background-color: ${({ inverse }) => inverse && "#f7f7f7"};

  h2 {
    margin-top: 0;
  }
  p {
    line-height: 26px;
  }

  div.section-video {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    max-height: 347.63px;
  }
`;

const Section = ({ inverse, children }) => (
  <Content inverse={inverse}>
    <Container>{children}</Container>
  </Content>
);

Section.defaultProps = {
  children: undefined,
  inverse: false,
};

Section.protoTypes = {
  children: PropTypes.node,
  inverse: PropTypes.bool,
};

export default Section;
