import { Box, useTheme } from "@mui/material";
import { MouseEventHandler } from "react";
import { LogoSection } from "./LogoSection";
import { MenuSection } from "./MenuSection";

interface MenuSectionProps {
  onClick: MouseEventHandler<HTMLDivElement>;
}

export const Header = ({ onClick }: MenuSectionProps) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        [theme.breakpoints.down("md")]: {
          width: "auto",
        },
      }}
    >
      <Box
        component="span"
        sx={{ display: { xs: "none", md: "block" }, flexGrow: 1 }}
      >
        <LogoSection />
      </Box>
      <Box component="span" sx={{ display: { md: "none" }, flexGrow: 1 }}>
        <MenuSection onClick={onClick}></MenuSection>
      </Box>
    </Box>
  );
};
