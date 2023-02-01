import React, { lazy, Suspense } from "react";

const LazyShop = lazy(() =>
  import("./Shop").then(module => ({ default: module.Shop }))
);

export const Shop = (
  props: JSX.IntrinsicAttributes & { children?: React.ReactNode }
) => (
  <Suspense fallback={null}>
    <LazyShop {...props} />
  </Suspense>
);
