import React, { useEffect, useState } from "react";

import Digit from "../Digit";

import type { TimerProps } from "../../types";

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

const leftTime = (deadline: string): number => {
  const diff = Date.parse(deadline) - Date.now();
  return diff > 0 ? diff : 0;
};

function Timer({ deadline }: TimerProps) {
  const [time, setTime] = useState(leftTime(deadline));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(leftTime(deadline));
    }, 1000);

    return () => clearInterval(interval);
  }, [deadline]);

  return (
    <>
      <Digit label="days" digit={Math.floor(time / DAY)} />
      <Digit label="hours" digit={Math.floor((time / HOUR) % 24)} />
      <Digit label="minuts" digit={Math.floor((time / MINUTE) % 60)} />
      <Digit label="seconds" digit={Math.floor((time / SECOND) % 60)} />
    </>
  );
}

export default Timer;
