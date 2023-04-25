import React, { useState } from "react";
import { useCountUp } from "use-count-up";

export default function CountUpToFive() {
  const [start] = useState(0);
  const [end] = useState(15);
  const [duration] = useState(3);

  const { value } = useCountUp({
    isCounting: true,
    start,
    end,
    duration,
    enableScrollSpy: true,
    scrollSpyOnce: true,
  });

  return (
    <div>
      <div>{value}+</div>
    </div>
  );
}
