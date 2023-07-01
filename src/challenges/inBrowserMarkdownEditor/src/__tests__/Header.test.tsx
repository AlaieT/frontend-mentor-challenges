import React from "react";
import { render, cleanup } from "@testing-library/react";

import Header from "../components/Header";

afterEach(cleanup);

describe("Header", () => {
  describe("correct render", () => {
    it("should match snapshot", () => {
      expect(
        render(
          <Header documentName="some-document" />
        ).asFragment()
      ).toMatchSnapshot();
    });
  });
});
