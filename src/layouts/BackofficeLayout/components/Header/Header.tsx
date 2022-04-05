import { Box, useTheme } from "@mui/material";
import { LogoSection } from "./LogoSection";
import { MenuSection } from "./MenuSection";
import { MenuSectionProps } from "./MenuSection/MenuSection";

type HeaderProps = MenuSectionProps;

export const Header = ({ onClick }: HeaderProps) => {
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
