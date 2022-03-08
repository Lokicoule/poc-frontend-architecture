import MailIcon from "@mui/icons-material/Mail";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { FC, MouseEventHandler } from "react";
import { uiConfiguration } from "../../../../constants/uiConfiguration";

interface SideBarProps {
  isOpen: boolean;
  onClose: MouseEventHandler<HTMLDivElement>;
}

export const SideBar: FC<SideBarProps> = ({ onClose, isOpen, children }) => {
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

      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
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
