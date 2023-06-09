import React from "react";
import { render, cleanup } from "@testing-library/react";

import Digit from "../components/Digit/index";

afterEach(cleanup);

describe("Digit", () => {
  describe("correct render", () => {
    it("should match snashot", () => {
      expect(
        render(<Digit label="day" digit={24} />).asFragment()
      ).toMatchSnapshot();
    });
  });
});
