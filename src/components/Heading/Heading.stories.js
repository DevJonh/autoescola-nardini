import React from 'react';

import Heading from '.';

const heading = {
  title: 'Components/Atoms/Heading',
  component: Heading,
};

export default heading;

export const usage = () => (
  <>
    <Heading>
      <h1>Título</h1>
    </Heading>
    <Heading>
      <h2>Título</h2>
    </Heading>
    <Heading>
      <h3>Título</h3>
    </Heading>
    <Heading>
      <h4>Título</h4>
    </Heading>
    <Heading>
      <h5>Título</h5>
    </Heading>
    <Heading>
      <h6>Título</h6>
    </Heading>
  </>
);
