import React from "react";
import { render, cleanup, act } from "@testing-library/react";

import Score from "../components/Score";

afterEach(cleanup);

describe("Score", () => {
  describe("correct render", () => {
    it("should match snapshot before animation ends", () => {
      expect(
        render(<Score score={100} delay={25} />).asFragment()
      ).toMatchSnapshot();
    });

    it("should match snapshot after animation ends", async () => {
      const { asFragment } = render(<Score score={10} delay={25} />);

      await act(async () => {
        await new Promise((resolve, _) =>
          setTimeout(() => resolve("done"), 275)
        );
      });

      expect(asFragment()).toMatchSnapshot();
    });
  });
});
