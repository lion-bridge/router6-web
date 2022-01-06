import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import UserRequest, { getUser, USER_SESSION } from "./user";
import { UserAction, UserInfoType } from "./inteface";

export const AuthContext = createContext<UserAction>({});

export const useAuth = () => {
  return useContext<UserAction>(AuthContext);
};

const AuthProvider = (props: { children: ReactNode }) => {
  const { children } = props;
  const [user, setUser] = useState<
    { token?: string; username?: string } | undefined
  >();
  const login = async (user: UserInfoType) => {
    const { token, username } = await UserRequest.login(user);
    window.sessionStorage.setItem(
      USER_SESSION,
      JSON.stringify({ token, username })
    );
    setUser({ token, username });
  };
  const logout = async () => {
    await UserRequest.logout();
    setUser(undefined);
    window.sessionStorage.removeItem(USER_SESSION);
  };
  useEffect(() => {
    const { token, username } = getUser();
    if (token) {
      setUser({ token, username });
    } 
  }, []);
  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
