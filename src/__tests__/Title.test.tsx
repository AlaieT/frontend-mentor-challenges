import React from "react";
import { render, cleanup, act } from "@testing-library/react";

import Title from "../components/Title";

afterEach(cleanup);

describe("Title", () => {
  const props = {
    sentence: "frontend mentor—challenges",
    delay: 10
  };

  describe("correct render", () => {
    it("should match snapshot before animation", () => {
      expect(
        render(<Title sentence={props.sentence} delay={props.delay} />).asFragment()
      ).toMatchSnapshot();
    });

    it("should match snapshot after animation", async () => {
      const { asFragment } = render(<Title sentence={props.sentence} delay={props.delay} />);

      await act(async () => {
        await new Promise((resolve, _) => {
          setTimeout(() => resolve("done"), props.sentence.length * props.delay + 50);
        });
      });

      expect(asFragment()).toMatchSnapshot();
    });
  });
});
