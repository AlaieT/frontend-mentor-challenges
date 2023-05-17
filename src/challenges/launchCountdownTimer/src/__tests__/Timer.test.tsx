import React from "react";
import { render } from "@testing-library/react";

import Timer from "../components/Timer";

describe("Timer testing...", () => {
  const props = {
    deadline: "April 30, 2023"
  };

  it("Snapshot testing", () => {
    const { asFragment } = render(<Timer deadline={props.deadline} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
