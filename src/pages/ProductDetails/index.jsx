import React from "react";
import PropTypes from "prop-types";
import { FaIdCard, FaHome, FaScroll } from "react-icons/fa";
import { useScrollTop } from "../../hooks/scroll";

import Hero from "../../components/Hero";
import Heading from "../../components/Heading";
import Section from "../../components/Section";
import Button from "../../components/Button";
import Footer from "../../components/Footer";
import Callout, { CalloutBody, CalloutMedia } from "../../components/Callout";

import bg from "../../assets/bg-car.jpg";
import Speed from "../../assets/svg/Speed";

import { PinnedList, PinnedItem } from "./styles";
import BreadCrumb from "../../components/BreadCrumb";

const ProductDetails = () => {
  useScrollTop();

  return (
    <>
      <Hero image={bg}>
        <Heading>
          <h1>Nome do Serviço</h1>
        </Heading>
        <BreadCrumb
          items={[
            { label: "Inicio", link: "/" },
            { label: "Serviços" },
            { label: "test" },
          ]}
        />
      </Hero>
      <Section>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo
          repellendus reiciendis dolore aut dolores sint blanditiis eos maxime!
          Modi rem magni fuga repudiandae qui expedita harum id hic facilis
          dolores?
        </p>
        <p>
          Possimus in, quae architecto deserunt minus optio ad, placeat,
          consectetur vitae earum iste hic rem? Maxime excepturi, obcaecati
          repellendus sapiente cupiditate, voluptatum placeat rerum aliquid
          aliquam amet asperiores id? Nulla?
        </p>
        <p>
          Sapiente minus illo, quae, ut veritatis corrupti molestiae dolor ipsum
          quibusdam soluta atque magnam odit delectus et eum, optio ipsa. Earum,
          eius. Minus, dolorum quo? Aut neque in voluptatum reiciendis.
        </p>
        <h5>Documentos necessários</h5>
        <PinnedList>
          <PinnedItem>
            <FaIdCard />
            RG
          </PinnedItem>
          <PinnedItem>
            <FaIdCard />
            Cpf
          </PinnedItem>
          <PinnedItem>
            <FaScroll />
            Certidão de nascimento ou casamento
          </PinnedItem>
          <PinnedItem>
            <FaHome />
            Comprovante de residência
          </PinnedItem>
        </PinnedList>
      </Section>
      <Section inverse>
        <Callout>
          <CalloutBody>
            <h6>Faça a sua matrícula agora mesmo</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur veritatis porro rem, saepe, itaque a consequuntur
              optio unde eius quis perferendis tempore asperiores quasi quam
              blanditiis, est dignissimos suscipit magnam!
            </p>
            <Button color="primary">Matricular</Button>
          </CalloutBody>
          <CalloutMedia>
            <Speed />
          </CalloutMedia>
        </Callout>
      </Section>
      <Footer />
    </>
  );
};

ProductDetails.defaultProps = {};

ProductDetails.protoTypes = {};

export default ProductDetails;
