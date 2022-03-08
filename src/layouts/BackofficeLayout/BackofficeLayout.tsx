import { AppBar, Container, useMediaQuery, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import * as React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./components/Header";
import { LogoSection } from "./components/Header/LogoSection/LogoSection";
import { SideBar } from "./components/SideBar";
import { uiConfiguration } from "../../constants/uiConfiguration";

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
        <Outlet></Outlet>
      </Container>
    </Box>
  );
};
