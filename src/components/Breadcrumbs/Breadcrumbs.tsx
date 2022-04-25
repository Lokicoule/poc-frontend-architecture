import { default as BreadcrumbsMui } from "@mui/material/Breadcrumbs";
import { useLocation } from "react-router-dom";
import { LinkRouter } from "../LinkRouter";
import { Crumb } from "./Crumb";

export type CrumbProps = { [key: string]: { alias: string; last?: boolean } };

export type BreadcrumbsProps = {
  crumbs: CrumbProps;
};

export const Breadcrumbs = ({ crumbs }: BreadcrumbsProps) => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <BreadcrumbsMui separator="›" aria-label="breadcrumb">
      <LinkRouter underline="hover" color="inherit" to="/">
        Home
      </LinkRouter>
      {pathnames.map((value, index) => {
        const lastPath = index === pathnames.length - 1;
        const to = `/${pathnames.slice(0, index + 1).join("/")}`;
        const { alias, last } = !!crumbs[to] && crumbs[to];
        return (
          alias && (
            <Crumb
              name={alias}
              to={to}
              last={last || lastPath}
              key={to}
            ></Crumb>
          )
        );
      })}
    </BreadcrumbsMui>
  );
};
