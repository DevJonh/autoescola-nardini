import React from "react";

import { breakAt, BreakPoints } from "./index";

test.each([
  [BreakPoints.sm],
  [BreakPoints.md],
  [BreakPoints.lg],
  [BreakPoints.xl],
])("breakAt %ipx", (size) => {
  expect(breakAt(size)).toEqual(`@media (min-width: ${size}px)`);
});
