import React from "react";
import ExpiredNotice from "./ExpiredNotice";
import { useCountdown } from "../lib/hooks";
import ShowCounter from "./ShowCounter";

interface Props {
  targetDate: string;
}

const CountdownTimer = ({ targetDate }: Props) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};

export default CountdownTimer;
