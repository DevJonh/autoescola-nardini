import React from "react";

import Callout, { CalloutBody, CalloutMedia } from ".";
import Button from "../Button";

import Speed from "../../assets/svg/Speed";

const callout = {
  title: "Components/Atoms/Callout",
  component: Callout,
  subcomponents: { CalloutBody, CalloutMedia },
};

export default callout;

export const usage = () => (
  <Callout>
    <CalloutBody>
      <h6>Faça a sua matrícula agora mesmo</h6>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
        veritatis porro rem, saepe, itaque a consequuntur optio unde eius quis
        perferendis tempore asperiores quasi quam blanditiis, est dignissimos
        suscipit magnam!
      </p>
      <Button color="primary">Matricular</Button>
    </CalloutBody>
    <CalloutMedia>
      <Speed />
    </CalloutMedia>
  </Callout>
);
