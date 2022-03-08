import { useRoutes } from "react-router-dom";
import { BackofficeRoutes } from "./backoffice";
import { MainRoutes } from "./main";

export const Routes = () => useRoutes([...MainRoutes, BackofficeRoutes]);
