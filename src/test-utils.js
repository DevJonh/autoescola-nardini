import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import ThemeProvider from "./styles/ThemeProvider";

const TestProvider = ({ children }) => (
  <MemoryRouter>
    <ThemeProvider>{children}</ThemeProvider>
  </MemoryRouter>
);

export * from "@testing-library/react";

const customRender = (ui, options) =>
  render(ui, { wrapper: TestProvider, ...options });

export { customRender as render };
