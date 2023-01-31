import React, { lazy, Suspense } from "react";

const LazyTemplateName = lazy(() =>
  import("./TemplateName").then(module => ({ default: module.TemplateName }))
);

export const TemplateName = (
  props: JSX.IntrinsicAttributes & { children?: React.ReactNode }
) => {
  return (
    <Suspense fallback={null}>
      <LazyTemplateName {...props} />
    </Suspense>
  );
};
