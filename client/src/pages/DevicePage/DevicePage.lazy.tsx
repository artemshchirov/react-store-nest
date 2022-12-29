import React, { lazy, Suspense } from 'react';

const LazyAdmin = lazy(() =>
  import('./DevicePage').then((module) => ({ default: module.DevicePage })),
);

export const DevicePage = (
  props: JSX.IntrinsicAttributes & { children?: React.ReactNode },
) => (
  <Suspense fallback={null}>
    <LazyAdmin {...props} />
  </Suspense>
);
