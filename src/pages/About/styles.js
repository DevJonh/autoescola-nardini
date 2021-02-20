import styled from "styled-components";

export const ImageContainer = styled.div`
  svg {
    width: 100%;
    height: auto;
    max-width: 380px;
    color: ${({ theme }) => theme.colors.primary.main};
    transition: 0.3s;
  }
`;
