import { MenuItem, MenuItemType } from "./MenuItem";

export type MenuListProps = {
  items: Readonly<MenuItemType[]>;
};

export const MenuList = ({ items }: MenuListProps) => {
  return (
    <>
      {items?.map((item) => (
        <MenuItem key={item.id} item={item}></MenuItem>
      ))}
    </>
  );
};
