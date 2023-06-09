import React from "react";
import { render, cleanup } from "@testing-library/react";

import Input from "../components/Input";

afterEach(cleanup);

describe("Input", () => {
  describe("correct render", () => {
    it("should match snapshot", () => {
      const { asFragment } = render(
        <Input id="name" label="Name" error="Name is required!" />
      );

      expect(asFragment()).toMatchSnapshot();
    });
  });
});
