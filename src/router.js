import React from "react";
import { useRoutes, Navigate } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard";
import News from "./Pages/News/News";

function Router() {
  return useRoutes([
    {
      element: <Dashboard />,
      path: "/dashboard",
      children: [
        {
          element: <News />,
          path: "news",
        },
      ],
    },
    {
      element: <Navigate to="/dashboard" />,
      path: "/",
    },
  ]);
}

export default Router;
