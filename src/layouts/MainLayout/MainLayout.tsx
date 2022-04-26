import { Container, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import * as React from "react";
import { Outlet } from "react-router-dom";

export const MainLayout = () => {
  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100%",
        overflow: "hidden",
      }}
    >
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
