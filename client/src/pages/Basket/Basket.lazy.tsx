import React, { lazy, Suspense } from "react";

const LazyBasket = lazy(() =>
  import("./Basket").then(module => ({ default: module.Basket }))
);

export const Basket = (
  props: JSX.IntrinsicAttributes & { children?: React.ReactNode }
) => (
  <Suspense fallback={null}>
    <LazyBasket {...props} />
  </Suspense>
);
