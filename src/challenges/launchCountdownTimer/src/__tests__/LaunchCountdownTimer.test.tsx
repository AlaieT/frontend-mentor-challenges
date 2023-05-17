import React from "react";
import { render, cleanup } from "@testing-library/react";

import LaunchCountdownTimer from "../components/LaunchCountdownTimer";

describe("LaunchCountdownTimer", () => {
  const props = {
    title: "WE'RE LAUNCHING SOON",
    deadline: "April 30, 2023",
    links: {
      facebook: "",
      pinterest: "",
      instagram: ""
    },
    background: {
      starsImage: "/",
      hillsImage: "/"
    }
  };

  describe("correct render", () => {
    it("should match snapshot", () => {
      expect(
        render(
          <LaunchCountdownTimer
            background={props.background}
            deadline={props.deadline}
            title={props.title}
            links={props.links}
          />
        ).asFragment()
      ).toMatchSnapshot();
    });
  });
});
