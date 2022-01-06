import React from "react";
import AuthProvider from "./AuthProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./login";
import Logout from "./logout";
import Home from "./Home";
import RequiredAuth from "./RequiredAuth";
import Mine from "./Mine";
import NoMatch from "./NoMatch";

const AuthPage: React.FC = () => {
  return (
    <AuthProvider>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="login" element={<Login />}></Route>
          <Route path="logout" element={Logout}></Route>
          <Route index element={<Home />}></Route>
          <Route element={<Logout />}>
            <Route element={<RequiredAuth />}>
              <Route path="mine" element={<Mine />}></Route>
            </Route>
          </Route>
          <Route path='*' element={<NoMatch />}></Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default AuthPage;
