import { lazy } from "react";
import { RouteObject } from "react-router-dom";
import { Loadable } from "../../../components/Loadable";
import { MainLayout } from "../../../layouts";

const SignInPage = Loadable(
  lazy(() =>
    import("../pages/auth/SignInPage").then((module) => ({
      default: module.SignInPage,
    }))
  )
);

const SignUpPage = Loadable(
  lazy(() =>
    import("../pages/auth/SignUpPage").then((module) => ({
      default: module.SignUpPage,
    }))
  )
);

export const AuthenticationRoutes: RouteObject = {
  path: "/",
  element: <MainLayout />,
  children: [
    {
      path: "signIn",
      element: <SignInPage />,
    },
    {
      path: "signUp",
      element: <SignUpPage />,
    },
  ],
};
