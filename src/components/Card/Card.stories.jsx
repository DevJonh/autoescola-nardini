import React from "react";

import Card, { CardBody, CardMedia } from ".";
import Section from "../Section";
import Heading from "../Heading";
import Button from "../Button";

import img from "../../stories/assets/bg-car.jpg";

const card = {
  title: "Components/Atoms/Card",
  component: Card,
  subcomponents: { CardMedia, CardBody },
};

export default card;

export const usage = () => (
  <Section inverse>
    <Card>
      <CardBody>
        <Heading>
          <h6>Título</h6>
        </Heading>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          dolores,
        </p>
        <div>
          <Button color="primary" variant="link">
            Saiba mais
          </Button>
        </div>
      </CardBody>
    </Card>
  </Section>
);

export const withMedia = () => (
  <Section inverse>
    <Card>
      <CardMedia img={img} />
      <CardBody>
        <Heading>
          <h6>Título</h6>
        </Heading>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          dolores,
        </p>
        <div>
          <Button color="primary" variant="link">
            Saiba mais
          </Button>
        </div>
      </CardBody>
    </Card>
  </Section>
);
