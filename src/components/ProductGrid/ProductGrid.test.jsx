import React from "react";
import { render, screen } from "../../test-utils";

import ProductGrid from ".";
import { fireEvent } from "@testing-library/react";

const buildProducts = (size) => {
  const result = [];

  for (let i = 0; i < size; i++) {
    result.push({ title: `Title ${i}` });
  }
  return result;
};

describe.each([
  [6, 3],
  [1, 1],
  [2, 2],
  [3, 3],
  [4, 3],
])("with %i products", (size, showOnly) => {
  test(`show only ${showOnly} items`, () => {
    render(<ProductGrid products={buildProducts(size)} />);

    expect(screen.getAllByRole("heading").length).toBe(showOnly);
  });

  test("show all the products when button is clicked", async () => {
    render(<ProductGrid products={buildProducts(size)} />);

    await fireEvent.click(screen.getByText("LISTA COMPLETA DE SERVIÇOS"));

    expect(screen.getAllByRole("heading").length).toBe(size);
  });
});
