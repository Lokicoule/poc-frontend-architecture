import { Suspense } from "react";
import { BundleLoader } from "../Loaders";

export const Loadable = (Component: any) => (props: any) =>
  (
    <Suspense fallback={<BundleLoader />}>
      <Component {...props} />
    </Suspense>
  );
