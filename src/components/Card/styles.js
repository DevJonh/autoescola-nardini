import styled from "styled-components";

export const CardRoot = styled.div`
  background-color: #fff;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.125);
  overflow: hidden;
`;

export const Body = styled.div`
  padding: 16px;

  h6 {
    margin: 16px 0;
  }
`;

export const Media = styled.div`
  background-image: url(${({ image }) => image});
  background-position: center center;
  background-size: cover;
  height: 270px;
  position: relative;
`;

export const MediaDescription = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  color: #fff;
  padding: 8px 16px;
  width: 100%;
  position: absolute;
  bottom: 0;
  h5 {
    margin: 0;
  }
`;
