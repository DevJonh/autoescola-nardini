import React from 'react';
import { render } from '../../test-utils';

import Hero from './index';

test('renders Hero with children', () => {
  const { getByText } = render(
    <Hero>
      <p>Jônatas Oliveira</p>
    </Hero>,
  );

  expect(getByText('Jônatas Oliveira')).toBeInTheDocument();
});

test('renders image background', () => {
  const image = 'http://test/image.jpg';

  const { getByTestId } = render(<Hero img={image} />);

  expect(getByTestId('hero')).toHaveStyleRule({
    backgroundImage: image,
  });
});
