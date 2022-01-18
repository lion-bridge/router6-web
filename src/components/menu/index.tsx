import { requestRoute } from "@/api/route.api";
import { useRequest } from "ahooks";
import { Menu } from "antd";
import { MenuItem } from "@/api/interface";
import { useEffect, useMemo, useState, memo } from "react";
import { Outlet, useNavigate, useMatch, useLocation } from "react-router-dom";
import CustomeLink from "./CustomeLink";

const { SubMenu } = Menu;

const useMenuInfo = (location: Location, list: MenuItem[]) => {
  const { pathname } = location;
};

const CtmMenu = () => {
  const menus = useRequest(requestRoute);
  const navigate = useNavigate();
  const location = useLocation();
  const [openKeys, setOpenKeys] = useState<string[]>();
  const [selectedKeys, setSelectedKeys] = useState<string[]>();

  const getMenuList = (list: MenuItem[]) => {
    const levels: MenuItem[][] = [spliceByPId(list, 0)];
    while (list?.length) {
      const level = levels.length - 1;
      if (level >= 10) break; // 有些子菜单配置错误，可能导致while死循环
      levels[level].forEach((v) => {
        v.children = spliceByPId(list, v.id!);
        levels[level + 1] = [...(levels?.[level + 1] || []), ...v.children];
      });
    }
    return levels[0];
  };
  const spliceByPId = (list: MenuItem[], pId: number) => {
    let i = 0;
    const targetList: MenuItem[] = [];
    while (i < list.length) {
      if (list[i].pId === pId) {
        targetList.push({
          ...list[i],
        });
        list.splice(i, 1);
      } else {
        i++;
      }
    }
    return targetList;
  };
  const renderSubMenu = (list: MenuItem[]) => {
    return list?.map((v) =>
      v?.children?.length ? (
        <SubMenu key={String(v.id)} title={v?.resNm}>
          {renderSubMenu(v.children)}
        </SubMenu>
      ) : (
        <Menu.Item
          key={String(v?.id)}
          onClick={() => {
            // console.log("Menu.Item", v);
            if (v?.path) {
              navigate(v.path);
            }
          }}
        >
          {v.resNm}
        </Menu.Item>
      )
    );
  };
  const renderMenu = useMemo(() => {
    // console.log("menus?.data?.length", menus?.data?.length);
    if (menus?.data?.length) {
      return (
        <Menu
          mode="inline"
          style={{ width: 256 }}
          openKeys={openKeys}
          selectedKeys={selectedKeys}
          onOpenChange={(openKeys: string[]) => {
            setOpenKeys(openKeys);
          }}
          onSelect={({ selectedKeys }) => {
            setSelectedKeys(selectedKeys);
          }}
        >
          {renderSubMenu(getMenuList(JSON.parse(JSON.stringify(menus?.data))))}
        </Menu>
      );
    } else {
      return null;
    }
  }, [menus]);
  useEffect(() => {
    if (location?.pathname && menus?.data) {
      const target = menus?.data?.find((v) => v?.path === location.pathname);
      if (target) {
        // console.log("target", target);
        setOpenKeys([String(target.pId)]);
        setSelectedKeys([String(target.id)]);
      }
    }
  }, [menus?.data, location]);
  return (
    <div style={{ display: "flex" }}>
      {renderMenu}
    </div>
  );
};

export default memo(CtmMenu);
