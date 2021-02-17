import styled from "styled-components";

export const CardRoot = styled.div`
  background-color: #fff;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.125);
  overflow: hidden;
`;

export const Body = styled.div`
  padding: 16px;
`;

export const Media = styled.div`
  background-image: url(${({ image }) => image});
  background-position: center center;
  background-size: cover;
  height: 270px;
`;
