import React from "react";
import PropTypes from "prop-types";

import Hero from "../../components/Hero";
import Heading from "../../components/Heading";
import Section from "../../components/Section";
import Grid from "../../components/Grid";
import Footer from "../../components/Footer";

import bg from "../../assets/bg-car.jpg";
import AboutImage from "../../assets/svg/About";

import { ImageContainer } from "./styles";

const About = () => (
  <>
    <Hero image={bg}>
      <Heading>
        <h1>Auto Escola Nardini</h1>
      </Heading>
    </Hero>
    <Section>
      <Grid md={2}>
        <div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus
            officiis quos alias tenetur enim obcaecati expedita eaque,
            cupiditate sit omnis, velit rem dolore ea? Quaerat dolore sed
            laborum est eveniet.
          </p>
          <p>
            Beatae, repudiandae repellendus temporibus consequatur ab officia
            nam expedita commodi maxime rerum molestias sunt omnis natus, id,
            ipsa aspernatur reprehenderit numquam? Tempora repellat atque enim
            obcaecati explicabo odio at ad.
          </p>
          <p>
            Sint veritatis magni minus. Quam, ducimus tempore. Aliquam odit qui
            earum neque. Corporis repellendus veniam assumenda officia, pariatur
            impedit eveniet, laudantium nemo minus eaque saepe voluptate maxime
            vitae atque hic.
          </p>

          <ul>
            <li>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic,
            </li>
            <li>Distinctio autem quisquam dolorem excepturi aperiam</li>
            <li>Recusandae, repellendus aperiam dolorem fugiat</li>
            <li>Reprehenderit ratione ipsa vitae earum ipsam vero,</li>
            <li>Recusandae quisquam iure magnam, adipisci dolorem nam</li>
          </ul>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            fugit ipsam eveniet alias, doloribus iure quas dicta eaque
            temporibus, tempore praesentium laborum. Necessitatibus fuga nobis
            unde quae voluptates reprehenderit quidem.
          </p>
          <center>
            <ImageContainer>
              <AboutImage />
            </ImageContainer>
          </center>
        </div>
      </Grid>
    </Section>
    <Section inverse>
      <Grid md={2}>
        <div>
          <h4>Missão</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In
            distinctio eum, enim libero tenetur nam aliquam, ab ipsa aliquid
            animi deserunt architecto. Earum delectus magnam dolorum accusantium
            saepe cumque facilis.
          </p>
        </div>
        <div>
          <h4> Visão</h4>
          <p>
            Fuga quasi rem quis libero, a similique officiis sit nulla ab
            dolorem qui tempore corporis dolor veritatis nobis repellendus vel,
            iste mollitia facilis? Ab laborum sapiente nostrum excepturi!
            Consequuntur, necessitatibus.
          </p>
        </div>
      </Grid>
    </Section>
    <Section>
      <Heading>
        <h2>Conheça nossos professores</h2>
      </Heading>
    </Section>
    <Footer />
  </>
);

About.defaultProps = {};

About.protoTypes = {};

export default About;
