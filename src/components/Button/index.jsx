import styled from "styled-components";
import PropTypes from "prop-types";

export const ButtonColors = {
  default: "default",
  primary: "primary",
  danger: "danger",
};

export const ButtonsVariants = {
  default: "default",
  outlined: "outlined",
  link: "link",
};

const getOutlinedText = (props) =>
  props.color === ButtonColors.default ? "#212121" : getColor(props);

const getLinkText = (props) =>
  props.color === ButtonColors.default ? "#757575" : getColor(props);

const getColor = ({ theme, color }) => {
  switch (color) {
    case ButtonColors.primary:
      return theme.colors.primary.main;
    case ButtonColors.danger:
      return theme.colors.danger.main;
    default:
      return "#e0e0e0";
  }
};
const getDarkColor = ({ theme, color }) => {
  switch (color) {
    case ButtonColors.primary:
      return theme.colors.primary.dark;
    case ButtonColors.danger:
      return theme.colors.danger.dark;
    default:
      return "#5a6268";
  }
};

const ButtonStyles = styled.button`
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  padding: 12px 36px;
  cursor: pointer;
  background-color: ${getColor};
  border: 2px solid ${getColor};
  color: ${({ theme, color }) => theme.colors.primary.text};
  transition: 0.4s;

  &:disabled {
    opacity: 0.6;
    cursor: initial;
  }

  &:hover:enabled {
    background-color: ${getDarkColor};
    border: 2px solid ${getDarkColor};
  }
`;

const ButtonOutlined = styled(ButtonStyles)`
  background-color: transparent;
  color: ${getOutlinedText};
  transition: 0.4s;

  &:hover:enabled {
    background-color: transparent;
    color: ${getDarkColor};
    border-color: ${getDarkColor};
  }
`;

const ButtonLink = styled(ButtonStyles)`
  background-color: transparent;
  border: none;
  color: ${getLinkText};
  transition: 0.4s;
  padding: auto 0;

  &:hover:enabled {
    background-color: transparent;
    color: ${getDarkColor};
    border: none;
  }
`;

const Button = (props) => {
  switch (props.variant) {
    case ButtonsVariants.outlined:
      return <ButtonOutlined {...props} />;
    case ButtonsVariants.link:
      return <ButtonLink {...props} />;

    default:
      return <ButtonStyles {...props} />;
  }
};

Button.defaultProps = {
  type: "button",
  children: undefined,
  color: "default",
  variant: "default",
};

Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node,
  color: PropTypes.oneOf(Object.values(ButtonColors)),
  variant: PropTypes.oneOf(Object.values(ButtonsVariants)),
};

export default Button;
