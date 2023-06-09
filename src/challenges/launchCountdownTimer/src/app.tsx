import React, { useEffect, useState } from "react";

import LaunchCountdownTimer from "./components/LaunchCountdownTimer";

import type { LaunchCountdownTimerProps } from "./types";

import "./styles/global.scss";

const App = () => {
  const [pageData, setPageData] = useState<null | LaunchCountdownTimerProps>(
    null
  );

  useEffect(() => {
    const getPageData = async () => {
      fetch(
        `${import.meta.env.BASE_URL}data/pagePropsLaunchCountdownTimer.json`,
        {
          method: "GET",
          mode: "same-origin"
        }
      )
        .then((response) => response.json())
        .then((data) => setPageData(data));
    };

    getPageData();

    return () => undefined;
  }, []);

  return pageData ? (
    <LaunchCountdownTimer
      deadline={pageData.deadline}
      links={pageData.links}
      title={pageData.title}
    />
  ) : null;
}

export default App;
