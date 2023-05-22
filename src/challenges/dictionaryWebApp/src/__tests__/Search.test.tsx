import React from "react";
import {
  render,
  cleanup,
  screen,
  act,
  fireEvent
} from "@testing-library/react";

import Search from "../components/Search";

afterEach(() => cleanup());

describe("Search", () => {
  describe("correct render", () => {
    it("should match snapshot", () => {
      expect(
        render(<Search mode="light" url="/word" />).asFragment()
      ).toMatchSnapshot();
    });
  });

  describe("correct functionality", () => {
    it("should give an error when search word is empty string", async () => {
      render(<Search mode="light" url="/word" />);

      fireEvent.input(screen.getByRole("textbox"), { target: { value: "" } });

      await act(() => fireEvent.click(screen.getByRole("button")));

      expect(
        screen.getByLabelText("Whoops, can’t be empty…")
      ).toBeInTheDocument();
    });

    it("should fetch word definition onsubmit", async () => {
      global.fetch = jest.fn(() =>
        Promise.resolve({
          json: () => Promise.resolve({ word: "response" })
        })
      );

      render(<Search mode="light" url="/word/response" />);

      fireEvent.input(screen.getByRole("textbox"), {
        target: { value: "response" }
      });

      await act(() => fireEvent.click(screen.getByRole("button")));

      expect(global.fetch).toBeCalled();
    });
  });
});
