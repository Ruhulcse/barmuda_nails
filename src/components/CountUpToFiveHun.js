import React, { useState } from "react";
import { useCountUp } from "use-count-up";

export default function CountUpToFiveHun() {
  const [start] = useState(0);
  const [end] = useState(500);
  const [duration] = useState(5);

  const { value } = useCountUp({
    isCounting: true,
    start,
    end,
    duration,
  });

  return (
    <div>
      <div>{value}+</div>
    </div>
  );
}
