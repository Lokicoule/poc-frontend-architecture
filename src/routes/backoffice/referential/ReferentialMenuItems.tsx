import GroupIcon from "@mui/icons-material/Group";
import InventoryIcon from "@mui/icons-material/Inventory";
import ReceiptIcon from "@mui/icons-material/Receipt";
import { MenuItemType } from "../../../components/MenuList/MenuItem";

export const ReferentialMenuItems: Readonly<MenuItemType> = {
  id: "referential",
  title: "Référentiel",
  to: "referential",
  children: [
    {
      id: "referential-customers",
      title: "Clients",
      to: "referential/customers",
      icon: <GroupIcon></GroupIcon>,
    },
    {
      id: "referential-orders",
      title: "Commandes",
      to: "referential/orders",
      icon: <ReceiptIcon></ReceiptIcon>,
    },
    {
      id: "referential-products",
      title: "Produits",
      to: "referential/products",
      icon: <InventoryIcon></InventoryIcon>,
    },
  ],
};
