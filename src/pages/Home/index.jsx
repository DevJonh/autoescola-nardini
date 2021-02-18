import React from 'react';
// import PropTypes from "prop-types";
import {
  FaCar, FaKey, FaAccessibleIcon, FaMapMarkedAlt,
} from 'react-icons/fa';

import Hero from '../../components/Hero';
import Heading from '../../components/Heading';
import Button from '../../components/Button';
import Grid from '../../components/Grid';
import Feature from '../../components/Feature';
import Footer from '../../components/Footer';
import ProductGrid from '../../components/ProductGrid';
import Accordion from '../../components/Accordion';

import bgCar from '../../assets/bg-car.jpg';
import videoCar from '../../assets/Car.mp4';
import Section from '../../components/Section';
import AccordionGroup from '../../components/AccordionGroup';

const products = [
  {
    title: '1ª Habilitação Carro e Moto',
    summary:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maximedolores',
    img: bgCar,
  },
  {
    title: '1ª Habilitação Carro',
    summary:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maximedolores',
    img: bgCar,
  },
  {
    title: '1ª Habilitação Moto',
    summary:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maximedolores',
    img: bgCar,
  },
  {
    title: 'Mudança de Categoria',
    summary:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maximedolores',
    img: bgCar,
  },
  {
    title: 'Aulas Avulsas',
    summary:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maximedolores',
    img: bgCar,
  },
];

const Home = () => (
  <>
    <Hero image={bgCar}>
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
    <Section>
      <Grid sm={2} md={4}>
        <Feature icon={<FaCar />} title="Maior e melhor frota">
          <p>Lorem, ipsum dolor sit </p>
        </Feature>
        <Feature icon={<FaKey />} title="Habilitação mais rápida">
          <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
        </Feature>
        <Feature icon={<FaMapMarkedAlt />} title="Excelente localização">
          <p>Lorem, ipsum dolor sit adipisicing elit.</p>
        </Feature>
        <Feature icon={<FaAccessibleIcon />} title="Acessibilidade">
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </Feature>
      </Grid>
    </Section>
    <Section inverse>
      <Heading>
        <h2>Conheça nossos Serviços</h2>
      </Heading>
      <ProductGrid products={products} />
    </Section>
    <Section>
      <Grid md={2}>
        <div className="section-video">
          <Heading>
            <h2>Nardini Auto Escola</h2>
          </Heading>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            distinctio quisquam consequatur laborum illum sequi, vel labore!
            Consequuntur illum asperiores cumque odit maxime reprehenderit
            impedit velit id, recusandae nesciunt alias.
          </p>

          <div>
            <Button color="primary">Saiba mais</Button>
          </div>
        </div>
        <div>
          <video src={videoCar} width="100%" autoPlay loop muted />
        </div>
      </Grid>
    </Section>
    <Section inverse>
      <Heading>
        <h2>Duvidas Importantes</h2>
      </Heading>
      <AccordionGroup>
        <Accordion title="Como eu renovo minha CNH?">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque dicta
          nihil enim dolore iste aliquam recusandae aut, hic eum, architecto
          delectus assumenda eveniet ullam pariatur reprehenderit dignissimos!
          Amet, earum omnis.
        </Accordion>
        <Accordion title="Como faço a mudança de categoria?">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque dicta
          nihil enim dolore iste aliquam recusandae aut, hic eum, architecto
          delectus assumenda eveniet ullam pariatur reprehenderit dignissimos!
          Amet, earum omnis.
        </Accordion>
        <Accordion title="Fui multado, e agora?">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque dicta
          nihil enim dolore iste aliquam recusandae aut, hic eum, architecto
          delectus assumenda eveniet ullam pariatur reprehenderit dignissimos!
          Amet, earum omnis.
        </Accordion>
      </AccordionGroup>
    </Section>
    <Footer />
  </>
);

Home.defaultProps = {};

Home.protoTypes = {};

export default Home;
