import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { MdExpandMore, MdExpandLess } from 'react-icons/md';
import { AccordionStyles, Head, Body } from './styles';

const Accordion = ({
  title, onChange, open: propsOpen, children,
}) => {
  const [stateOpen, setStateOpen] = useState(false);

  const isControlled = propsOpen !== undefined;
  const open = isControlled ? propsOpen : stateOpen;

  const handleClick = () => {
    if (!isControlled) {
      setStateOpen(!open);
    }
    onChange(!open);
  };
  return (
    <AccordionStyles open={open}>
      <Head role="button" onClick={handleClick}>
        <h6>{title}</h6>

        {open ? <MdExpandLess /> : <MdExpandMore />}
      </Head>
      {open && <Body>{children}</Body>}
    </AccordionStyles>
  );
};

Accordion.defaultProps = {
  title: undefined,
  children: undefined,
  open: undefined,
  onChange: undefined,
};

Accordion.protoTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  open: PropTypes.bool,
  onChange: PropTypes.func,
};

export default Accordion;
