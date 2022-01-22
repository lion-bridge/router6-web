import { Outlet } from "react-router-dom";
import CtmMenu from "@/components/menu";
import RouteTabs from "@/components/RouteTabs";

const Layout = () => {
  console.log("Layout");
  return (
    <div style={{ display: "flex" }}>
      <CtmMenu />
      <div>
        <RouteTabs>
          {/* <Outlet /> */}
        </RouteTabs>
      </div>
    </div>
  );
};

export default Layout;
