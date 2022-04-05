import { LazyExoticComponent, Suspense } from "react";
import { BundleLoader } from "../Loaders";

export const Loadable =
  (Component: LazyExoticComponent<() => JSX.Element>) => (props: any) =>
    (
      <Suspense fallback={<BundleLoader />}>
        <Component {...props} />
      </Suspense>
    );
