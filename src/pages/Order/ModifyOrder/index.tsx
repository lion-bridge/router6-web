import { useEffect } from "react";

const Page = () => {
  useEffect(() => {
    console.log("改单管理-useEffect");
  }, []);
  return <div>改单管理</div>;
};

export default Page;
