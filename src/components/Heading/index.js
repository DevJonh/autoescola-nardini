import styled from "styled-components";

const collorYellow = "#ffc107";

const Heading = styled.div`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    position: relative;
    margin-bottom: 24px;
    padding-bottom: 8px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);

    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -3px;
      background-color: ${collorYellow};
      height: 5px;
      width: 70px;
    }
  }

  h1 {
    padding-bottom: 24px;
  }
`;

export default Heading;
