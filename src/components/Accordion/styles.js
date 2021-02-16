import styled from "styled-components";

export const AccordionStyles = styled.div`
  border: 1px solid #e0e0e0;
  border-left: 5px solid ${({ theme }) => theme.colors.primary.main};
  background-color: #fff;
  margin: ${({ open }) => (open ? "16px 0" : 0)};

  &:first-child {
    margin-top: 0;
  }
  &:last-child {
    margin-bottom: 0;
  }
`;
export const Head = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  cursor: pointer;

  & h6 {
    margin: 0;
  }
  & svg {
    font-size: 1.25rem;
  }
`;
export const Body = styled.div`
  padding: 0 16px 16px;
`;
