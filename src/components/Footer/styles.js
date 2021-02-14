import styled from "styled-components";

export const Root = styled.footer`
  background-color: #2a2a2a;
  color: #aaa;
  padding: 40px 0;

  h6 {
    color: #fff;
    margin-top: 0;
    text-transform: uppercase;
  }
  span {
    margin-right: 8px;
  }
  p {
    margin-bottom: 16px;
    line-height: 26px;
  }
`;

export const FooterLink = styled.a`
  color: ${({ theme }) => theme.colors.primary.main};
  text-decoration: none;
  transition: 0.3s;

  &:hover {
    color: ${({ theme }) => theme.colors.primary.dark};
  }
`;
