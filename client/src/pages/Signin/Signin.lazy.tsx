import React, { lazy, Suspense } from "react";

const LazySignin = lazy(() =>
  import("./Signin").then(module => ({ default: module.Signin }))
);

export const Signin = (
  props: JSX.IntrinsicAttributes & { children?: React.ReactNode }
) => {
  return (
    <Suspense fallback={null}>
      <LazySignin {...props} />
    </Suspense>
  );
};
