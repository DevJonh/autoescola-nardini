import React from 'react';
import { text } from '@storybook/addon-knobs';

import Hero from '.';
import Heading from '../Heading';
import Button from '../Button';

import bgCar from '../../stories/assets/bg-car.jpg';
import bgCar2 from '../../stories/assets/bg-car2.jpg';

const hero = {
  title: 'Components/Molecules/Hero',
  component: Hero,
};

export default hero;

export const usage = () => (
  <Hero image={bgCar}>
    <h1>{text('Title', 'Ganhe sua liberdade de ir e vir')}</h1>
    <p>{text('Text', 'A auto escola líder em aprovação')}</p>
  </Hero>
);

export const withList = () => (
  <Hero image={bgCar2}>
    <Heading>
      <h1>
        Ganhe sua
        {' '}
        <strong>liberdade</strong>
        <br />
        {' '}
        de ir e vir
      </h1>
    </Heading>
    <ul>
      <li>Lorem Ipsum has been the industry's standard</li>
      <li>Lorem Ipsum has been the industry's standard</li>
      <li>Lorem Ipsum has been the industry's standard</li>
    </ul>
    <Button variant="outlined" color="primary">
      Matricule-se agora
    </Button>
  </Hero>
);
