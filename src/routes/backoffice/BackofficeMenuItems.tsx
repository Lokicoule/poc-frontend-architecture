import GroupIcon from "@mui/icons-material/Group";
import InventoryIcon from "@mui/icons-material/Inventory";
import ReceiptIcon from "@mui/icons-material/Receipt";
import { MenuItemType } from "../../components/MenuList/MenuItem";
import { ReferentialMenuItems } from "./referential/ReferentialMenuItems";

export const BackofficeMenuItems: Readonly<MenuItemType[]> = [
  {
    id: "backoffice",
    title: "Gestion",
    children: [
      {
        id: "customers",
        title: "Clients",
        to: "customers",
        icon: <GroupIcon></GroupIcon>,
      },
      {
        id: "orders",
        title: "Commandes",
        to: "orders",
        icon: <ReceiptIcon></ReceiptIcon>,
      },
      {
        id: "products",
        title: "Produits",
        to: "products",
        icon: <InventoryIcon></InventoryIcon>,
      },
    ],
  },
  ReferentialMenuItems,
];
