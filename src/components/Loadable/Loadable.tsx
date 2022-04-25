import { LazyExoticComponent, Suspense } from "react";
import { BundleLoader } from "../BundleLoader";

export const Loadable =
  (Component: LazyExoticComponent<() => JSX.Element>) => (props: any) =>
    (
      <Suspense fallback={<BundleLoader />}>
        <Component {...props} />
      </Suspense>
    );
