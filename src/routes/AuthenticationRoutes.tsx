import { lazy } from "react";
import { RouteObject } from "react-router-dom";
import { Loadable } from "../components/Loadable";
import { MainLayout } from "../layouts";

const SignInPage = Loadable(
  lazy(() =>
    import("../pages/authentication/SignInPage").then((module) => ({
      default: module.SignInPage,
    }))
  )
);

export const AuthenticationRoutes: RouteObject = {
  path: "auth",
  element: <MainLayout />,
  children: [
    {
      path: "sign-in",
      element: <SignInPage />,
    },
  ],
};
