import styled, { css } from "styled-components";

export const Root = styled.div`
  padding: 16px 0;
`;

export const Item = styled.span`
  color: #fff;
  display: inline-block;
  font-size: 20px;
  font-weight: 300;
  text-decoration: none;
  transition: 0.3s;
  ${({ isClicked }) =>
    isClicked &&
    css`
      cursor: pointer;
      &:hover {
        color: ${({ theme }) => theme.colors.primary.main};
      }
    `}

  :not(:first-child) {
    &::before {
      content: ">";
      color: ${({ theme }) => theme.colors.primary.main};
      padding: 0 16px;
    }
  }
`;
