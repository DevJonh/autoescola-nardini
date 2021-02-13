import React from "react";
import { render } from "../../test-utils";

import Heading from "./index";

test("match snapshot", () => {
  const { asFragment } = render(<Heading>Title</Heading>);

  expect(asFragment()).toMatchSnapshot();
});
