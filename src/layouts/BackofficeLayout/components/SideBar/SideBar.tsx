import { Box, Drawer, useMediaQuery, useTheme } from "@mui/material";
import { FC, MouseEventHandler } from "react";
import {
  MenuList,
  MenuListProps,
} from "../../../../components/MenuList/MenuList";
import { uiConfiguration } from "../../../../constants/uiConfiguration";

export type SideBarProps = MenuListProps & {
  isOpen: boolean;
  onClose: MouseEventHandler<HTMLDivElement>;
};

export const SideBar: FC<SideBarProps> = ({
  onClose,
  isOpen,
  items,
  children,
}) => {
  const theme = useTheme();
  const matchUpMd = useMediaQuery(theme.breakpoints.up("md"));

  const drawer = (
    <>
      <Box
        sx={{
          display: { xs: "block", md: "none" },
        }}
      >
        {children}
      </Box>
      <MenuList items={items}></MenuList>
    </>
  );

  return (
    <Box
      component="nav"
      sx={{
        flexShrink: { md: 0 },
        width: matchUpMd ? uiConfiguration.drawer.width : "auto",
      }}
    >
      <Drawer
        variant={matchUpMd ? "persistent" : "temporary"}
        anchor="left"
        open={isOpen}
        onClose={onClose}
        elevation={1}
        sx={{
          "& .MuiDrawer-paper": {
            width: uiConfiguration.drawer.width,
            background: theme.palette.background.default,
            color: theme.palette.text.primary,
            [theme.breakpoints.up("md")]: {
              top: theme.spacing(8),
            },
          },
        }}
        ModalProps={{ keepMounted: true }}
        color="inherit"
      >
        {drawer}
      </Drawer>
    </Box>
  );
};
