import { Container } from "@mui/material";
import { FC } from "react";
import { Helmet } from "react-helmet-async";

type PageProps = {
  title: string;
};

export const Page: FC<PageProps> = ({ children, title }) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Container component="main">{children}</Container>
    </>
  );
};
