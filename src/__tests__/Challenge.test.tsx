import React from "react";
import { render, cleanup } from "@testing-library/react";

import Challenge from "../components/Challenge";

afterEach(cleanup);

describe("Challenge", () => {
  const props = {
    delay: 1000,
    name: "Some challenge",
    imgSrc: "https://some-img.png"
  };

  describe("correct render", () => {
    it("should match snapshot", () => {
      expect(
        render(
          <Challenge
            delay={props.delay}
            name={props.name}
            imgSrc={props.imgSrc}
            disabled={false}
          />
        ).asFragment()
      ).toMatchSnapshot();
    });
  });
});
