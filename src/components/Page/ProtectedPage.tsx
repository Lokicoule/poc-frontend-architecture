import { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthentication } from "../../core/services/auth/hooks/useAuthentication";
import { Page, PageProps } from "./Page";

export const ProtectedPage: FC<PageProps> = ({ children, title }) => {
  const navigate = useNavigate();
  const isAuthenticated = useAuthentication();

  if (!isAuthenticated) return <h1>not allowed</h1>;

  return <Page title={title}>{children}</Page>;
};
