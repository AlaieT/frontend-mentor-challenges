import React from "react";
import { render, cleanup, act } from "@testing-library/react";

import Header from "../components/Header";

afterEach(cleanup)

describe("Header", () => {
  const titleProps = {
    sentence: "frontend mentor—challenges",
    delay: 50
  };

  describe("correct render", () => {
    it("should match snapshot before animation ends", () => {
      expect(render(<Header challengesCount={15}/>).asFragment()).toMatchSnapshot();
    });

    it("should match snapshot after animation ends", async () => {
      const { asFragment } = render(<Header challengesCount={15}/>);

      await act(async () => {
        await new Promise((resolve, _) =>
          setTimeout(
            () => resolve("done"),
            titleProps.sentence.length * titleProps.delay + 50
          )
        );
      });

      expect(asFragment()).toMatchSnapshot();
    });
  });
});
