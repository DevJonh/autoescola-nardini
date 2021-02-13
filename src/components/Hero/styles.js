import styled from "styled-components";

import { BreakPoints, breakAt } from "../../styles/BreakPoints";

export const Content = styled.div`
  ul {
    list-style: none;
    padding-left: 0;
  }

  li {
    ::before {
      content: "\\2713\\0020";
      color: ${({ theme }) => theme.colors.primary.main};
    }
  }

  p,
  li {
    font-size: 20px;
    font-weight: 300;
  }
`;

export const RootContainer = styled.div`
  background: url(${({ img }) => img}), rgba(0, 0, 0, 0.4);
  background-size: cover;
  background-position: center;
  background-blend-mode: overlay;

  color: #fff;
  padding: 100px 0;
`;

export const Container = styled.div`
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
