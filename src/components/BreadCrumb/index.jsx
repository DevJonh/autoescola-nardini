import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { Root, Item } from "./styles";

const BreadCrumb = ({ items }) => (
  <Root>
    {items.map((item) => (
      <Item
        key={item.label}
        as={item.link && Link}
        to={item.link}
        isClicked={!!item.link}
      >
        {item.label}
      </Item>
    ))}
  </Root>
);

BreadCrumb.defaultProps = {
  items: [],
};

BreadCrumb.protoTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      link: PropTypes.string,
    })
  ),
};

export default BreadCrumb;
