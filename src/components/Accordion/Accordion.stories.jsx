import React from "react";

import Accordion from ".";
import AccordionGroup from "../AccordionGroup";

const accordion = {
  title: "Components/Atoms/Accordion",
  component: Accordion,
};

export default accordion;

export const usage = () => (
  <>
    <Accordion title="Como eu renovo minha CNH?">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque dicta nihil
      enim dolore iste aliquam recusandae aut, hic eum, architecto delectus
      assumenda eveniet ullam pariatur reprehenderit dignissimos! Amet, earum
      omnis.
    </Accordion>
    <Accordion title="Como faço a mudança de categoria?">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque dicta nihil
      enim dolore iste aliquam recusandae aut, hic eum, architecto delectus
      assumenda eveniet ullam pariatur reprehenderit dignissimos! Amet, earum
      omnis.
    </Accordion>
    <Accordion title="Fui multado, e agora?">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque dicta nihil
      enim dolore iste aliquam recusandae aut, hic eum, architecto delectus
      assumenda eveniet ullam pariatur reprehenderit dignissimos! Amet, earum
      omnis.
    </Accordion>
  </>
);

export const withGroup = () => (
  <AccordionGroup>
    <Accordion title="Como eu renovo minha CNH?">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque dicta nihil
      enim dolore iste aliquam recusandae aut, hic eum, architecto delectus
      assumenda eveniet ullam pariatur reprehenderit dignissimos! Amet, earum
      omnis.
    </Accordion>
    <Accordion title="Como faço a mudança de categoria?">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque dicta nihil
      enim dolore iste aliquam recusandae aut, hic eum, architecto delectus
      assumenda eveniet ullam pariatur reprehenderit dignissimos! Amet, earum
      omnis.
    </Accordion>
    <Accordion title="Fui multado, e agora?">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque dicta nihil
      enim dolore iste aliquam recusandae aut, hic eum, architecto delectus
      assumenda eveniet ullam pariatur reprehenderit dignissimos! Amet, earum
      omnis.
    </Accordion>
  </AccordionGroup>
);
