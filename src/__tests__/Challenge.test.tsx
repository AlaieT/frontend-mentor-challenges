import React from "react";
import { render, cleanup } from "@testing-library/react";

import Challenge from "../components/Challenge";

afterEach(cleanup);

describe("Header", () => {
  const props = {
    name: "test project",
    link: "https://some-link.com"
  };

  describe("correct render", () => {
    it("should match snapshot", () => {
      expect(
        render(<Challenge name={props.name} link={props.link} />).asFragment()
      ).toMatchSnapshot();
    });
  });
});
