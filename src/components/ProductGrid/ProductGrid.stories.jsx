import React from 'react';

import ProductGrid from '.';

import img from '../../stories/assets/bg-car2.jpg';

const productGrid = {
  title: 'Components/Organism/ProductGrid',
  component: ProductGrid,
};

export default productGrid;

export const usage = () => (
  <ProductGrid
    products={[
      { img, title: 'Título', summary: 'texto' },
      { img, title: 'Título', summary: 'texto' },
      { img, title: 'Título', summary: 'texto' },
      { img, title: 'Título', summary: 'texto' },
      { img, title: 'Título', summary: 'texto' },
      { img, title: 'Título', summary: 'texto' },
      { img, title: 'Título', summary: 'texto' },
      { img, title: 'Título', summary: 'texto' },
      { img, title: 'Título', summary: 'texto' },
    ]}
  />
);
