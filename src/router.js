import React from "react";
import { useRoutes, Navigate, useLocation } from "react-router-dom";
import supabase from "./Hooks/supabase";
import useGetData from "./Hooks/useGetData";
import Dashboard from "./Pages/ADMIN/Dashboard/Dashboard";
import News from "./Pages/ADMIN/News/News";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
import Program from "./Pages/ADMIN/Program/Program";
import { Account } from "./Pages/ADMIN/Account/Account";
import { More } from "./Pages/ADMIN/More/More";
import { Document } from "./Pages/ADMIN/Document/Document";
import Home from "./Pages/User/Home";

function Router({ admin }) {
  const { data, isLoading } = useGetData({
    module: "USER_DEVELOPMENT",
    enabled: 1,
  });
  const USER = supabase.auth.user();
  const findAdmin = data?.find((item) => item.user_id === USER?.id);
  const location = useLocation();
  const pathAdmin = findAdmin?.is_admin ? "admin/" : "user/";
  console.log(admin, "=====");
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
            path: "/web-desa/user/home",
            element: <Home />,
          },
        ]
  );
}

export default Router;
