import React from "react";
import {
  render,
  cleanup,
  fireEvent,
  screen,
  act
} from "@testing-library/react";

import Header from "../components/Header";

afterEach(cleanup);

describe("Header", () => {
  describe("correct render", () => {
    it("should match snapshot without font change window", () => {
      expect(
        render(<Header font="Sans Serif" mode="light" />).asFragment()
      ).toMatchSnapshot();
    });

    it("should match snapshot with font change window", async () => {
      const { asFragment } = render(<Header font="Sans Serif" mode="light" />);

      await act(() => fireEvent.click(screen.getByRole("button")));

      expect(asFragment()).toMatchSnapshot();
    });
  });

  describe("correct functionality", () => {
    it("should call font set functions", async () => {
      const mockSetFont = jest.fn();

      render(
        <Header font="Sans Serif" mode="light" handleFont={mockSetFont} />
      );

      await act(() => fireEvent.click(screen.getByRole("button")));

      await act(() => fireEvent.click(screen.getByText(/mono/i)));

      expect(mockSetFont).toBeCalled();
    });

    it("should call mode set functions", async () => {
      const mockSetMode = jest.fn();

      render(
        <Header font="Sans Serif" mode="light" handleMode={mockSetMode} />
      );

      fireEvent.click(screen.getByRole("checkbox"));

      expect(screen.getByRole("checkbox")).toBeChecked();
      expect(mockSetMode).toBeCalled();
    });
  });
});
