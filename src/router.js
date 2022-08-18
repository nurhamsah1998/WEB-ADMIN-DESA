import React from "react";
import { useRoutes, Navigate } from "react-router-dom";
import Dashboard from "./Pages/ADMIN/Dashboard/Dashboard";
import News from "./Pages/ADMIN/News/News";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
import Program from "./Pages/ADMIN/Program/Program";
import { Account } from "./Pages/ADMIN/Account/Account";
import { More } from "./Pages/ADMIN/More/More";
import { Document } from "./Pages/ADMIN/Document/Document";
import Home from "./Pages/User/Home/index";
import Complain from "./Pages/ADMIN/Complain/Complain";
import UserProgram from "./Pages/User/Programs/index";
import Verified from "./Pages/Auth/Status/Verified";
import Denied from "./Pages/Auth/Status/Denied";

function Router({ admin }) {
  return useRoutes(
    admin
      ? [
          {
            path: `/web-desa/dashboard`,
            element: <Dashboard />,
          },
          {
            path: `/web-desa/news`,
            element: <News />,
          },
          {
            path: `/web-desa/program`,
            element: <Program />,
          },
          {
            path: `/web-desa/account`,
            element: <Account />,
          },
          {
            path: `/web-desa/more`,
            element: <More />,
          },
          {
            path: `/web-desa/document`,
            element: <Document />,
          },
          {
            path: `/web-desa/complain`,
            element: <Complain />,
          },
          {
            path: "/",
            element: <Navigate to="/web-desa/dashboard" />,
          },
          {
            path: "/auth/login",
            element: <Login />,
          },
          {
            path: "/auth/register",
            element: <Register />,
          },
        ]
      : //user route <==========================================================>
        [
          {
            path: "/",
            element: <Navigate to="/web-desa/user/home" />,
          },
          {
            path: "/auth/login",
            element: <Login />,
          },
          {
            path: "/auth/register",
            element: <Register />,
          },
          {
            path: "/web-desa/user/home",
            element: <Home />,
          },
          {
            path: "/web-desa/user/program",
            element: <UserProgram />,
          },
          {
            path: "/web-desa/user/awaiting",
            element: <Verified />,
          },
          {
            path: "/web-desa/user/denied",
            element: <Denied />,
          },
        ]
  );
}

export default Router;
