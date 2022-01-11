import { MenuItem } from "./interface";

export const requestRoute = async () => {
  const res = require("@/assets/json/menu") as { data: MenuItem[] };
  return res.data;
};
