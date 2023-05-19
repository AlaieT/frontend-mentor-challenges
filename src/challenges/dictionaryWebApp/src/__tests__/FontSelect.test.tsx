import React from "react";
import {
  render,
  cleanup,
  fireEvent,
  act,
  screen
} from "@testing-library/react";

import FontSelect from "../components/FontSelect";

afterEach(cleanup);

describe("FontsSelect", () => {
  describe("correct render", () => {
    it("should correct render without window for font selection", () => {
      expect(render(<FontSelect />).asFragment()).toMatchSnapshot();
    });

    it("should correct render with window for font selection", async () => {
      const { asFragment } = render(<FontSelect />);

      await act(async () => {
        fireEvent.click(
          (await screen.findAllByText(/sans serif/i))[0].parentElement
        );
      });

      expect(asFragment()).toMatchSnapshot();
    });
  });

  describe("correct functionality", () => {
    it("should correct change font type on clink", async () => {
      render(<FontSelect />);

      await act(async () => {
        fireEvent.click(
          (await screen.findAllByText(/sans serif/i))[0].parentElement
        );
      });

      await act(async () => {
        fireEvent.click((screen.getByText(/mono/i)));
      });      

      expect((await screen.findAllByText(/mono/i))[0]).toBeDefined();
    });
  });
});
