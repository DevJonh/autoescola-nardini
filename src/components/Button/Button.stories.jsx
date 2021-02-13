import React from "react";
import styled from "styled-components";
import { actions } from "@storybook/addon-actions";

import Button from ".";

const button = {
  title: "Components/Button",
  component: Button,
};
export default button;

const Toolbar = styled.div`
  display: flex;
  justify-content: space-between;
`;

const events = actions({ onClick: "clicked" });

export const usage = () => (
  <div>
    <p>Enabled: </p>
    <Toolbar>
      <Button {...events} color="default">
        Default
      </Button>
      <Button {...events} color="primary">
        Primary
      </Button>
      <Button {...events} color="danger">
        Danger
      </Button>
    </Toolbar>
    <p>Disabled: </p>
    <Toolbar>
      <Button disabled {...events} color="default">
        Default
      </Button>
      <Button disabled {...events} color="primary">
        Primary
      </Button>
      <Button disabled {...events} color="danger">
        Danger
      </Button>
    </Toolbar>
  </div>
);
export const outlined = () => (
  <div>
    <p>Enabled: </p>
    <Toolbar>
      <Button variant="outlined" {...events} color="default">
        Default
      </Button>
      <Button variant="outlined" {...events} color="primary">
        Primary
      </Button>
      <Button variant="outlined" {...events} color="danger">
        Danger
      </Button>
    </Toolbar>
    <p>Disabled: </p>
    <Toolbar>
      <Button variant="outlined" disabled {...events} color="default">
        Default
      </Button>
      <Button variant="outlined" disabled {...events} color="primary">
        Primary
      </Button>
      <Button variant="outlined" disabled {...events} color="danger">
        Danger
      </Button>
    </Toolbar>
  </div>
);
export const link = () => (
  <div>
    <p>Enabled: </p>
    <Toolbar>
      <Button variant="link" {...events} color="default">
        Default
      </Button>
      <Button variant="link" {...events} color="primary">
        Primary
      </Button>
      <Button variant="link" {...events} color="danger">
        Danger
      </Button>
    </Toolbar>
    <p>Disabled: </p>
    <Toolbar>
      <Button variant="link" disabled {...events} color="default">
        Default
      </Button>
      <Button variant="link" disabled {...events} color="primary">
        Primary
      </Button>
      <Button variant="link" disabled {...events} color="danger">
        Danger
      </Button>
    </Toolbar>
  </div>
);
