import React from "react";
import { useRoutes } from "react-router-dom";
import Login from "./Pages/Auth/Login";
import Home from "./Pages/User/Home";

function UserRouter() {
  return useRoutes([
    {
      path: "/auth/login",
      element: <Login />,
    },
    {
      path: "/web-desa/user/home",
      element: <Home />,
    },
  ]);
}

export default UserRouter;
