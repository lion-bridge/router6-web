import { useEffect } from "react";

const Page = () => {
  useEffect(() => {
    console.log("创建订单-useEffect");
  }, []);
  return <div>创建订单</div>;
};

export default Page;
