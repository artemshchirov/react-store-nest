import React, { lazy, Suspense } from 'react';

const LazyAdmin = lazy(() =>
  import('./Shop').then((module) => ({ default: module.Shop })),
);

export const Shop = (
  props: JSX.IntrinsicAttributes & { children?: React.ReactNode },
) => (
  <Suspense fallback={null}>
    <LazyAdmin {...props} />
  </Suspense>
);
