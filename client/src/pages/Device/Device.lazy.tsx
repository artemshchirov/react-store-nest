import React, { lazy, Suspense } from "react";

const LazyDevice = lazy(() =>
  import("./Device").then(module => ({ default: module.Device }))
);

export const Device = (
  props: JSX.IntrinsicAttributes & { children?: React.ReactNode }
) => (
  <Suspense fallback={null}>
    <LazyDevice {...props} />
  </Suspense>
);
