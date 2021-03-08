import styled from "styled-components";

import { breakAt, BreakPoints } from "../../styles/BreakPoints";

export const StyledCallout = styled.div`
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-left: 3px solid ${({ theme }) => theme.colors.primary.main};
  border-radius: 4px;
  padding: 16px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  h6 {
    margin: 16px 0;
  }
`;

export const StyledCalloutBody = styled.div`
  flex: 1;
  p {
    margin: 0 0 8px;
  }
`;
export const StyledCalloutMedia = styled.div`
  width: 30%;
  display: none;
  ${breakAt(BreakPoints.md)} {
    display: flex;
  }
  svg {
    color: ${({ theme }) => theme.colors.primary.main};
    width: 100%;
    height: 100%;
    max-height: 200px;
    transition: 0.3s;
  }
`;
