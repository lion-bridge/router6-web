import { lazy, Suspense, ReactNode } from "react";
import { Spin } from "antd";

const LazyComponent = ({ component }: { component: Promise<any> }) => {
  const LazyComponent = lazy(() => component);
  return (
    <Suspense fallback={<Spin spinning={true} />}>
      <LazyComponent />
    </Suspense>
  );
};

export default LazyComponent;
