import React from "react";
import CountUp from "react-countup";

export default function CountUpToFiveHun() {
  return (
    <CountUp
      start={0}
      end={5}
      duration={3}
      enableScrollSpy={true}
      scrollSpyOnce={true}
      suffix="+"
    />
  );
}
