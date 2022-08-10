import React from "react";
import { useRoutes, Navigate } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard";
import News from "./Pages/News/News";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";

function Router() {
  return useRoutes([
    {
      path: "/web-desa/dashboard",
      element: <Dashboard />,
    },
    {
      path: "/web-desa/news",
      element: <News />,
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
  ]);
}

export default Router;
