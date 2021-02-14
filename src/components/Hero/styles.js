import styled from "styled-components";

export const Content = styled.div`
  display: inline-block;
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
