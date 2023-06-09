import React from "react";
import {
  render,
  cleanup,
  screen,
  act,
  fireEvent,
  waitFor
} from "@testing-library/react";

import Search from "../components/Search";

jest.mock("react-router-dom", () => {
  const originalModule = jest.requireActual("react-router-dom");

  return {
    __esModule: true,
    ...originalModule,
    useNavigate: () => () => undefined,
    useLocation: () => ({
      pathname: "/?word=response",
      search: { word: "response" }
    })
  };
});

beforeEach(() => {
  window.scrollTo = jest.fn();

  global.fetch = jest.fn().mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve({ word: "response" })
    })
  );
});

afterEach(() => cleanup());

describe("Search", () => {
  describe("correct render", () => {
    it("should match snapshot", async () => {
      const { asFragment } = await waitFor(() =>
        render(<Search mode="light" url="/word" />)
      );

      expect(asFragment()).toMatchSnapshot();
    });
  });

  describe("correct functionality", () => {
    it("should give an error when search word is empty string", async () => {
      await waitFor(() => render(<Search mode="light" url="/word" />));

      fireEvent.input(screen.getByRole("textbox"), { target: { value: "" } });

      await act(() => fireEvent.click(screen.getByRole("button")));

      expect(
        screen.getByLabelText("Whoops, can’t be empty…")
      ).toBeInTheDocument();
    });

    it("should fetch word definition onsubmit", async () => {
      await waitFor(() => render(<Search mode="light" url="/word" />));

      fireEvent.input(screen.getByRole("textbox"), {
        target: { value: "response" }
      });

      await act(() => fireEvent.click(screen.getByRole("button")));

      expect(global.fetch).toBeCalled();
    });
  });
});
