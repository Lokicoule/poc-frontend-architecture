import { Navigate, RouteObject } from "react-router-dom";
import { MainLayout } from "../layouts";
import { NotFoundPage } from "../pages/main";

export const MainRoutes: RouteObject[] = [
  {
    path: "/",
    element: <MainLayout />,
    children: [{ path: "not-found", element: <NotFoundPage /> }],
  },
  { path: "*", element: <Navigate to="/not-found" replace /> },
];
