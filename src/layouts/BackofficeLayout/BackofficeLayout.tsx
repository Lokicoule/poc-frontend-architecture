import { AppBar, Container, useMediaQuery, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import * as React from "react";
import { Outlet } from "react-router-dom";
import { Breadcrumbs, BreadcrumbsProps } from "../../components";
import { uiConfiguration } from "../../constants/uiConfiguration";
import { Header } from "./components/Header";
import { LogoSection } from "./components/Header/LogoSection/LogoSection";
import { SideBar } from "./components/SideBar";

const breadcrumbNameMap: Readonly<BreadcrumbsProps> = {
  crumbs: {
    "/backoffice": { alias: "Backoffice" },
    "/backoffice/customers": { alias: "Clients" },
    "/backoffice/customers/create": {
      alias: "Nouveau client",
      last: true,
    },
    "/backoffice/customers/view": { alias: "Information client", last: true },
    "/backoffice/customers/update": {
      alias: "Mise à jour client",
      last: true,
    },
    "/backoffice/products": { alias: "Produits" },
    "/backoffice/products/create": {
      alias: "Nouveau produit",
      last: true,
    },
    "/backoffice/products/view": { alias: "Information produit", last: true },
    "/backoffice/products/update": {
      alias: "Mise à jour produit",
      last: true,
    },
  },
};

export const BackofficeLayout = () => {
  const theme = useTheme();
  const matchUpMd = useMediaQuery(theme.breakpoints.up("md"));
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    setOpen(matchUpMd);
  }, [matchUpMd]);

  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100%",
        overflow: "hidden",
      }}
    >
      <AppBar
        position="fixed"
        color="inherit"
        elevation={1}
        sx={{
          ml: { md: `${uiConfiguration.drawer.width}px` },
          transition: open ? theme.transitions.create("width") : "none",
        }}
      >
        <Toolbar>
          <Header onClick={() => setOpen(true)}></Header>
        </Toolbar>
      </AppBar>
      <SideBar isOpen={open} onClose={() => setOpen(false)}>
        <LogoSection></LogoSection>
      </SideBar>
      <Container
        maxWidth="xl"
        sx={{
          minWidth: "sm",
          mt: 4,
          mb: 4,
        }}
      >
        <Toolbar />
        <Breadcrumbs crumbs={breadcrumbNameMap.crumbs}></Breadcrumbs>
        <Outlet></Outlet>
      </Container>
    </Box>
  );
};
