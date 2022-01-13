export interface MenuItem {
  id?: number;
  pId?: number;
  resCode?: string;
  resNm?: string;
  resTypCd?: string;
  path?: string;
  children?: MenuItem[];
}