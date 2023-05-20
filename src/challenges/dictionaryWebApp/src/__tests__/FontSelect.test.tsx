import React from "react";
import {
  render,
  cleanup,
  fireEvent,
  act,
  screen,
  queryByText
} from "@testing-library/react";

import FontSelect from "../components/FontSelect";

afterEach(cleanup);

describe("FontsSelect", () => {
  describe("correct render", () => {
    it("should correct render without window for font selection", () => {
      expect(
        render(<FontSelect font="Sans Serif" mode="light" />).asFragment()
      ).toMatchSnapshot();
    });

    it("should correct render with window for font selection", async () => {
      const { asFragment } = render(
        <FontSelect font="Sans Serif" mode="light" />
      );

      await act(async () => {
        fireEvent.click(screen.getByText(/sans serif/i).parentElement);
      });

      expect(asFragment()).toMatchSnapshot();
    });
  });

  describe("correct functionality", () => {
    it("should execute callback function on click", async () => {
      const mockCallback = jest.fn();

      render(
        <FontSelect callback={mockCallback} font="Sans Serif" mode="light" />
      );

      await act(async () => {
        fireEvent.click(screen.getByText(/sans serif/i).parentElement);
      });

      await act(async () => {
        fireEvent.click(screen.getByText(/mono/i));
      });

      expect(mockCallback).toBeCalled();
    });

    it("should close font select window on mouse leave", async () => {
      const mockCallback = jest.fn();

      render(
        <FontSelect callback={mockCallback} font="Sans Serif" mode="light" />
      );

      await act(async () => {
        fireEvent.click(screen.getByText(/sans serif/i).parentElement);
      });

      await act(async () => {
        fireEvent.mouseLeave(
          (await screen.findAllByText(/mono/i))[0].parentElement
        );
      });

      expect(
        queryByText(
          screen.getByText(/sans serif/i).parentElement?.parentElement,
          /mono/i
        )
      ).not.toBeInTheDocument();
    });
  });
});
