import React from "react";
import {
  render,
  cleanup,
  fireEvent,
  screen,
  act
} from "@testing-library/react";

import ModeChange from "../components/ModeChange";

afterEach(cleanup);

describe("ModeChange", () => {
  describe("correct render", () => {
    it("should match snapshot", () => {
      expect(
        render(<ModeChange mode={"light"} />).asFragment()
      ).toMatchSnapshot();
    });
  });

  describe("correct functionality", () => {
    it("should be checked after click", async () => {
      const mockCallback = jest.fn();

      render(<ModeChange callback={mockCallback} mode={"light"} />);

      fireEvent.click(screen.getByRole("checkbox"));

      expect(screen.getByRole("checkbox")).toBeChecked();
      expect(mockCallback).toBeCalled();
    });
  });
});
