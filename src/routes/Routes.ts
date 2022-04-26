import { useRoutes } from "react-router-dom";
import { AuthenticationRoutes } from "./AuthenticationRoutes";
import { BackofficeRoutes } from "./backoffice";
import { MainRoutes } from "./MainRoutes";

export const Routes = () =>
  useRoutes([...MainRoutes, BackofficeRoutes, AuthenticationRoutes]);
