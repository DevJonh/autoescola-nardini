import PropTypes from "prop-types";
import styled from "styled-components";

import { breakAt, BreakPoints } from "../../styles/BreakPoints";

const Container = styled.div`
  width: 100%;
  padding: 0 16px;

  ${breakAt(BreakPoints.sm)} {
    padding: 0 24px;
  }
  ${breakAt(BreakPoints.xl)} {
    max-width: 1140px;
    padding: 0;
    margin: 0 auto;
  }
`;

Container.defaultProps = {
  children: undefined,
};

Container.protoTypes = {
  children: PropTypes.node,
};

export default Container;
