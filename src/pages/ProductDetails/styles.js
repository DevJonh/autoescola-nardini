import styled from "styled-components";

export const PinnedList = styled.ul`
  list-style: none;
  padding-left: 0;
  display: flex;
  flex-wrap: wrap;
`;

export const PinnedItem = styled.li`
  display: flex;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.125);
  padding: 8px 16px;
  border-radius: 4px;
  margin: 8px 16px 8px 0;
  svg {
    margin-right: 8px;
  }
`;
