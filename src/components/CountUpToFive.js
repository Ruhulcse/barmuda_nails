import React, { useCallback, useState } from "react";
import CountUp from "react-countup";
// import ScrollTrigger from "react-scroll-trigger";

export default function CountUpToFiveHun() {
  // const [counter, setCounter] = useState(false);
  return (
    <div>
      {/* <ScrollTrigger
        onEnter={() => setCounter(true)}
        onExit={() => setCounter(false)}
      > */}
      {/* {counter && ( */}
      <CountUp
        enableScrollSpy
        scrollSpyOnce
        start={0}
        end={15}
        duration={3}
        suffix="+"
      />
      {/* )} */}
      {/* </ScrollTrigger> */}
    </div>
  );
}
