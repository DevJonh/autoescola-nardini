import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Grid from '../Grid';
import Heading from '../Heading';
import Button from '../Button';
import Card, { CardBody, CardMedia } from '../Card';

const ButtonContainer = styled.div`
  margin-top: 40px;
  text-align: center;
`;

const ProductGrid = ({ products }) => {
  const [showAll, setShowAll] = useState(false);

  const filteredProducts = showAll ? products : products.slice(0, 3);

  return (
    <>
      <Grid md={3}>
        {filteredProducts.map((product, i) => (
          <div key={i}>
            <Card>
              <CardMedia img={product.img} />
              <CardBody>
                <Heading>
                  <h6>{product.title}</h6>
                </Heading>
                <p>{product.summary}</p>
                <div>
                  <Button color="primary" variant="link">
                    Saiba mais
                  </Button>
                </div>
              </CardBody>
            </Card>
          </div>
        ))}
      </Grid>
      {!showAll && (
        <ButtonContainer>
          <Button onClick={() => setShowAll(true)} variant="outlined">
            LISTA COMPLETA DE SERVIÇOS
          </Button>
        </ButtonContainer>
      )}
    </>
  );
};

ProductGrid.defaultProps = {
  products: [],
};

ProductGrid.protoTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      img: PropTypes.string,
      title: PropTypes.string,
      summary: PropTypes.string,
    }),
  ),
};

export default ProductGrid;
