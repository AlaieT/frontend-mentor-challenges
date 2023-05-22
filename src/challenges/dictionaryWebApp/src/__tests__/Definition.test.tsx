import React from "react";
import { render, cleanup } from "@testing-library/react";

import Definition from "../components/Definition";

afterEach(cleanup);

describe("Definition", () => {
  const props = {
    partOfSpeech: "noun",
    definitions: [
      {
        definition:
          "An answer or reply, or something in the nature of an answer or reply."
      },
      {
        definition:
          "The act of responding or replying; reply: as, to speak in response to a question."
      }
    ],
    synonyms: ["synonym1", "synonym2"],
    antonyms: ["antonym1", "antonym2"]
  };

  describe("correct render", () => {
    it("should match snapshot", () => {
      expect(
        render(<Definition mode="light" {...props} />).asFragment()
      ).toMatchSnapshot();
    });
  });
});
