import React from "react";
import { render } from "@testing-library/react";

import GlobalStyle from "./index";

test("match snapshot", () => {
  render(<GlobalStyle />);

  expect(document.head).toMatchSnapshot();
});
