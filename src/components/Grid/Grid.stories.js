import React from 'react';
import styled from 'styled-components';

import Grid from '.';

const grid = {
  title: 'Components/Atoms/Grid',
  component: Grid,
};

export default grid;

const Box = styled.div`
  height: 200px;
  background-color: indigo;
`;

export const usage = () => (
  <Grid sm={2} md={3} lg={4} xl={5}>
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
  </Grid>
);
