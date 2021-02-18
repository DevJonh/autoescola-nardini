import styled from 'styled-components';

import { breakAt, BreakPoints } from '../../styles/BreakPoints';

const getColor = ({ theme }) => theme.colors.primary.main;

const FeatureStyles = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 270px;
  height: 300px;
  margin: 0 auto;

  & h5 {
    margin: 16px 0;
  }

  & p {
    margin: 0;
  }
`;

export const IconRoot = styled.div`
  width: 116px;
  height: 116px;
  margin: 0 auto;
  padding: 8px;

  border: 1px solid #e9e9e9;
  border-radius: 50%;
  font-size: 32px;

  display: flex;
  align-items: center;
  justify-content: center;
  color: ${getColor};
  transition: 0.5s;

  &:hover {
    border: 1px solid ${getColor};
    color: #fff;
    background-color: ${getColor};
  }
`;

export default FeatureStyles;
