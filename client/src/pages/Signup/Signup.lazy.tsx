import React, { lazy, Suspense } from "react";

const LazySignup = lazy(() =>
  import("./Signup").then(module => ({ default: module.Signup }))
);

export const Signup = (
  props: JSX.IntrinsicAttributes & { children?: React.ReactNode }
) => {
  return (
    <Suspense fallback={null}>
      <LazySignup {...props} />
    </Suspense>
  );
};
