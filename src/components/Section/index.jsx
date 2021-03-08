import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Container from "../Container";
import { breakAt, BreakPoints } from "../../styles/BreakPoints";

const Content = styled.div`
  padding: 40px 0;
  background-color: ${({ inverse }) => inverse && "#f7f7f7"};

  h2,
  h4 {
    margin-top: 0;
  }

  h4 {
    margin-bottom: 32px;
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

  ${breakAt(BreakPoints.md)} {
    padding: 80px 0;
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
