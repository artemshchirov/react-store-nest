import React, { lazy, Suspense } from "react";

const LazyAdmin = lazy(() =>
  import("./Admin").then(module => ({ default: module.Admin }))
);

export const Admin = (
  props: JSX.IntrinsicAttributes & { children?: React.ReactNode }
) => (
  <Suspense fallback={null}>
    <LazyAdmin {...props} />
  </Suspense>
);
