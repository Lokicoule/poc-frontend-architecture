import MenuIcon from "@mui/icons-material/Menu";
import { Avatar, ButtonBase, useTheme } from "@mui/material";
import { MouseEventHandler } from "react";

interface MenuSectionProps {
  onClick: MouseEventHandler<HTMLDivElement>;
}

export const MenuSection = ({ onClick }: MenuSectionProps) => {
  const theme = useTheme();
  return (
    <ButtonBase sx={{ overflow: "hidden" }}>
      <Avatar
        sx={{
          transition: "all .2s ease-in-out",
          background: theme.palette.background.default,
          color: theme.palette.common.black,
          "&:hover": {
            background: theme.palette.grey[100],
          },
        }}
        onClick={onClick}
        color="inherit"
      >
        <MenuIcon></MenuIcon>
      </Avatar>
    </ButtonBase>
  );
};
