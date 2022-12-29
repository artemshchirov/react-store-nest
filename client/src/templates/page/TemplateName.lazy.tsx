import React, { lazy, Suspense } from 'react';

const LazyAdmin = lazy(() =>
  import('./TemplateName').then((module) => ({ default: module.TemplateName })),
);

export const TemplateName = (
  props: JSX.IntrinsicAttributes & { children?: React.ReactNode },
) => (
  <Suspense fallback={null}>
    <LazyAdmin {...props} />
  </Suspense>
);
