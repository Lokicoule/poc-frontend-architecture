import { Container, Typography } from "@mui/material";
import { FC, forwardRef } from "react";
import { Helmet } from "react-helmet-async";

interface PageProps {
  title: string;
}

export const Page: FC<PageProps> = forwardRef<HTMLDivElement, PageProps>(
  ({ children, title = "", ...others }, ref) => {
    return (
      <>
        <Helmet>
          <title>{title}</title>
        </Helmet>
        <Container component="main">
          <Typography variant="h4">{title}</Typography>
          {children}
        </Container>
      </>
    );
  }
);
