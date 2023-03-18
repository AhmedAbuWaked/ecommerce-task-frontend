import { LazyExoticComponent, Suspense } from "react";
import SuspenseLoader from "../suspense-loader";

const Loader =
  (Component: LazyExoticComponent<() => JSX.Element>) => (props: any) =>
    (
      <Suspense fallback={<SuspenseLoader />}>
        <Component {...props} />
      </Suspense>
    );
export default Loader;
