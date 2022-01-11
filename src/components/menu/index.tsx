import { requestRoute } from "@/api/route.api";
import { useRequest } from "ahooks";
import { Menu } from "antd";
import { MenuItem } from "@/api/interface";
import { useMemo } from "react";
import { Outlet } from "react-router-dom";

const { SubMenu } = Menu;

const CtmMenu = () => {
  const menus = useRequest(requestRoute);

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
        targetList.push(list[i]);
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
        <SubMenu key={v.id} title={v?.resNm}>
          {renderSubMenu(v.children)}
        </SubMenu>
      ) : (
        <Menu.Item key={v?.id}>{v.resNm}</Menu.Item>
      )
    );
  };
  const renderMenu = useMemo(() => {
    if (menus?.data?.length) {
      return renderSubMenu(getMenuList(menus?.data));
    } else {
      return null;
    }
  }, [menus]);
  return (
    <div>
      <Menu mode="inline" style={{ width: 256 }}>
        {renderMenu}
      </Menu>
      <Outlet />
    </div>
  );
};

export default CtmMenu;
