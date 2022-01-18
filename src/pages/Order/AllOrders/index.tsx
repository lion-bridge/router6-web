import { useRouterTabContext } from "@/components/Provider/contex";
import { Button } from "antd";
import { useEffect } from "react";

const Page = () => {
  useEffect(() => {
    console.log("全部订单-useEffect");
  }, []);
  const routerTab = useRouterTabContext();

  const createOrder = () => {
    routerTab?.createTab({ title: "创建1", path: `/order/create/${Date.now()}` });
  };
  return (
    <div>
      全部订单
      <Button type="primary" onClick={createOrder}>
        创建订单
      </Button>
    </div>
  );
};

export default Page;
