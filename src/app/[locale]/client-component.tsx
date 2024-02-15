"use client";

import { useEffect, useRef } from "react";

const ClientComponent = () => {
  const hasRunBefore = useRef(false);
  console.log(hasRunBefore.current);

  useEffect(() => {
    if (hasRunBefore.current) return;
    hasRunBefore.current = true;
  }, []);

  return <div>client component</div>;
};

export { ClientComponent };
