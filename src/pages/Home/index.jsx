import React from "react";
//import PropTypes from "prop-types";
import { FaCar, FaKey, FaAccessibleIcon, FaMapMarkedAlt } from "react-icons/fa";

import Hero from "../../components/Hero";
import Heading from "../../components/Heading";
import Button from "../../components/Button";
import Grid from "../../components/Grid";
import Feature from "../../components/Feature";

import bgCar from "../../assets/bg-car.jpg";
import Section from "../../components/Section";

const Home = () => (
  <>
    <Hero image={bgCar}>
      <Heading>
        <h1>
          Ganhe sua <strong>liberdade</strong>
          <br /> de ir e vir
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
  </>
);

Home.defaultProps = {};

Home.protoTypes = {};

export default Home;
