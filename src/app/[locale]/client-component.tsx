"use client";

import { useEffect, useRef, useState } from "react";

const ClientComponent = () => {
  const [count, setCount] = useState(0);
  const hasRunBefore = useRef(false);
  console.log(hasRunBefore.current);

  useEffect(() => {
    if (hasRunBefore.current) return;
    hasRunBefore.current = true;
  }, []);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>count: {count}</button>
    </div>
  );
};

export { ClientComponent };
