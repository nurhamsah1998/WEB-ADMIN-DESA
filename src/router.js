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
import Home from "./Pages/User/Home";
import Complain from "./Pages/ADMIN/Complain/Complain";

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
      : [
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
        ]
  );
}

export default Router;
