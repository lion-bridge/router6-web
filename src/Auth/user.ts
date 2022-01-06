import { UserInfoType } from "./inteface";

export const USER_SESSION = "user";

const UserRequest = {
  login: (user: UserInfoType) => {
    const { username } = user;
    return new Promise<UserInfoType>((resovle, reject) => {
      setTimeout(() => {
        const token = `${Date.now()}`;
        resovle({ token, username });
      }, 1000);
    });
  },
  logout: () => {
    return new Promise((resovle, reject) => {
      setTimeout(() => {
        resovle(undefined);
      }, 1000);
    });
  },
};

export const getUser = () => {
  const user = window.sessionStorage.getItem(USER_SESSION);
  return JSON.parse(user || "{}") as UserInfoType;
}

export default UserRequest;
