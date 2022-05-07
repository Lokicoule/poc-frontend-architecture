import { Navigate, RouteObject } from "react-router-dom";
import { MainLayout } from "../../../layouts";
import { NotFoundPage } from "../pages/NotFoundPage";
import { routesConfig } from "./configs/routes.config";
import { HomePage } from "../pages/HomePage";

export const CoreRoutes: RouteObject[] = [
  {
    path: routesConfig.defaultPath,
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      { path: routesConfig.notFoundPath, element: <NotFoundPage /> },
    ],
  },
  { path: "*", element: <Navigate to={routesConfig.notFoundPath} replace /> },
];
