import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import { breakAt, BreakPoints } from '../../styles/BreakPoints';

const Grid = styled.div`
  display: grid;
  gap: 16px;

  grid-template-columns: 1fr;

  ${({ sm }) => sm
    && css`
      ${breakAt(BreakPoints.sm)} {
        grid-template-columns: repeat(${({ sm }) => sm}, 1fr);
      }
    `}

  ${({ md }) => md
    && css`
      ${breakAt(BreakPoints.md)} {
        grid-template-columns: repeat(${({ md }) => md}, 1fr);
      }
    `}
  ${({ lg }) => lg
    && css`
      ${breakAt(BreakPoints.lg)} {
        grid-template-columns: repeat(${({ lg }) => lg}, 1fr);
      }
    `}
  ${({ xl }) => xl
    && css`
      ${breakAt(BreakPoints.xl)} {
        grid-template-columns: repeat(${({ xl }) => xl}, 1fr);
      }
    `}
`;

Grid.defaultProps = {
  sm: undefined,
  md: undefined,
  lg: undefined,
  xl: undefined,
};

Grid.protoTypes = {
  sm: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number,
  xl: PropTypes.number,
};
export default Grid;
