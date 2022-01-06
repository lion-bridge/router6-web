export interface LocationStateTyep {
  from?: Location;
}
export interface UserAction {
  user?: UserInfoType;
  login?: (user: UserInfoType) => Promise<void>;
  logout?: () => Promise<void>;
} 
export interface UserInfoType {
  username?: string;
  password?: string;
  token?: string;
}