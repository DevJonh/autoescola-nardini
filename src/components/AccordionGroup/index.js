import PropTypes from 'prop-types';
import React, { useState } from 'react';

const AccordionGroup = ({ children }) => {
  const [index, setIndex] = useState(-1);
  return React.Children.map(children, (child, i) => React.cloneElement(child, {
    open: i === index,
    onChange: () => (i === index ? setIndex(-1) : setIndex(i)),
  }));
};

AccordionGroup.defaultProps = {
  children: undefined,
};

AccordionGroup.protoTypes = {
  children: PropTypes.node,
};

export default AccordionGroup;
