import { MenuItem } from "./interface";

export const requestRoute = async () => {
  console.log("请求接口", "/assets/json/menu");
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const res = require("@/assets/json/menu") as { data: MenuItem[] };
  return res.data;
};
