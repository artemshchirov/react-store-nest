import React, { lazy, Suspense } from "react";

const LazyAdmin = lazy(() =>
  import("./Basket").then(module => ({ default: module.Basket }))
);

export const Basket = (
  props: JSX.IntrinsicAttributes & { children?: React.ReactNode }
) => (
  <Suspense fallback={null}>
    <LazyAdmin {...props} />
  </Suspense>
);
