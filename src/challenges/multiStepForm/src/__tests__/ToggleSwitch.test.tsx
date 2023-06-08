import React from "react";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";

import ToggleSwitch from "../components/ToggleSwitch";

afterEach(cleanup);

describe("ToggleSwitch", () => {
  describe("correct render", () => {
    it("should match snapshot", () => {
      const { asFragment } = render(<ToggleSwitch />);

      expect(asFragment()).toMatchSnapshot();
    });
  });
});
