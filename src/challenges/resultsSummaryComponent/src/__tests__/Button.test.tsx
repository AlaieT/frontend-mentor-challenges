import React from "react";
import { render, cleanup } from "@testing-library/react";

import Button from "../components/Button";

afterEach(cleanup);

describe("Button", () => {
  describe("correct render", () => {
    it("should match snapshot", () => {
      expect(render(<Button />).asFragment()).toMatchSnapshot();
    });
  });
});
