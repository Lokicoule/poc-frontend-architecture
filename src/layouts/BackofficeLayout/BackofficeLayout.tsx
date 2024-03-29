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
import { SideBarProps } from "./components/SideBar/SideBar";

type BackofficeLayoutProps = BreadcrumbsProps & Pick<SideBarProps, "items">;

export const BackofficeLayout = ({ crumbs, items }: BackofficeLayoutProps) => {
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
      <SideBar items={items} isOpen={open} onClose={() => setOpen(false)}>
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
        <Breadcrumbs crumbs={crumbs}></Breadcrumbs>
        <Outlet></Outlet>
      </Container>
    </Box>
  );
};
