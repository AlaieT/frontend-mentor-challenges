import React from "react";
import { render, cleanup } from "@testing-library/react";

import Menu from "../components/Menu";

afterEach(cleanup);

describe("Menu", () => {
  describe("correct render", () => {
    it("should match snapshot", () => {
      expect(
        render(
          <Menu
            myDocuments={{
              "untitled-document": { date: "01 April 2022", text: "" },
              welcome: { date: "01 April 2022", text: "" }
            }}
            mode="dark"
          />
        ).asFragment()
      ).toMatchSnapshot();
    });
  });
});
