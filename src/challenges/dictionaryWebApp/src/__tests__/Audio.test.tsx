import React from "react";
import { render, cleanup } from "@testing-library/react";

import Audio from "../components/Audio";

afterEach(cleanup);

describe("Audio", () => {
  describe("correct render", () => {
    it("should match snapshot", () => {
      expect(
        render(<Audio src="https://some_audio.mp3" />).asFragment()
      ).toMatchSnapshot();
    });
  });
});
