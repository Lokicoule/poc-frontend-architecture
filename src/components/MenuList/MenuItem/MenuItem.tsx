import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import {
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from "@mui/material";
import React from "react";
import { ListItemLink } from "../../Link/ListItemLink";
import { MenuList } from "../MenuList";

export type MenuItemType = {
  id: string;
  title: string;
  to?: string;
  collapse?: boolean;
  icon?: JSX.Element;
  children?: Readonly<MenuItemType[]>;
};

export interface MenuItemProps {
  item: Readonly<MenuItemType>;
}

export const MenuItem = ({ item }: MenuItemProps) => {
  const [open, setOpen] = React.useState(true);
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    (item.children && item.collapse && (
      <List
        component="nav"
        subheader={
          <ListItemButton onClick={handleClick}>
            {item.icon && <ListItemIcon>{item.icon}</ListItemIcon>}
            <ListItemText primary={item.title} />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
        }
      >
        <Collapse in={open} timeout="auto" unmountOnExit>
          <MenuList items={item.children}></MenuList>
        </Collapse>
      </List>
    )) || (
      <List
        subheader={
          <ListSubheader component="div">
            <ListItemLink
              to={item?.to || ""}
              primary={item.title}
              icon={item.icon}
            />
          </ListSubheader>
        }
      >
        {item.children && <MenuList items={item.children}></MenuList>}
      </List>
    )
  );
};
