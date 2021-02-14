import React from "react";
import { render } from "../../test-utils";

import Feature from ".";

test("render the title", () => {
  const { getByText } = render(<Feature title="My title"></Feature>);

  expect(getByText("My title")).toBeInTheDocument();
});

test("render the children", () => {
  const { getByText } = render(<Feature>My title</Feature>);

  expect(getByText("My title")).toBeInTheDocument();
});
