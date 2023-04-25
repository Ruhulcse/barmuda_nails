import React, { useState } from "react";
import CountUp from "react-countup";
// import ScrollTrigger from "react-scroll-trigger";

export default function CountUpToFiveHun() {
  // const [count, setCount] = useState(false);
  return (
    <div>
      {/* <ScrollTrigger
        onEnter={() => setCount(true)}
        onExit={() => setCount(false)}
      > */}
      {/* {count && ( */}
      <CountUp
        enableScrollSpy
        scrollSpyOnce
        start={0}
        end={500}
        duration={3}
        suffix="+"
      />
      {/* )} */}
      {/* </ScrollTrigger> */}
    </div>
  );
}
