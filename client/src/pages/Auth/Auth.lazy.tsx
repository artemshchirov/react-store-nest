import React, { lazy, Suspense } from "react";

const LazyAdmin = lazy(() =>
  import("./Auth").then(module => ({ default: module.Auth }))
);

export const Auth = (
  props: JSX.IntrinsicAttributes & { children?: React.ReactNode }
) => (
  <Suspense fallback={null}>
    <LazyAdmin {...props} />
  </Suspense>
);
