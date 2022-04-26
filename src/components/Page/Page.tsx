import { Breakpoint, Container } from "@mui/material";
import { FC } from "react";
import { Helmet } from "react-helmet-async";

export type PageProps = {
  title: string;
  maxWidth?: Breakpoint;
};

export const Page: FC<PageProps> = ({ children, title, maxWidth }) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Container component="main" maxWidth={maxWidth}>
        {children}
      </Container>
    </>
  );
};
