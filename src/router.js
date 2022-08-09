import React from "react";
import { useRoutes, Navigate } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard";
import News from "./Pages/News/News";

function Router() {
  return useRoutes([
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
    {
      path: "news",
      element: <News />,
    },
    {
      path: "/",
      element: <Navigate to="/dashboard" />,
    },
  ]);
}

export default Router;
