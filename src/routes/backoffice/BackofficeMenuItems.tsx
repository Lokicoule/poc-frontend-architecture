import GroupIcon from "@mui/icons-material/Group";
import InventoryIcon from "@mui/icons-material/Inventory";
import ReceiptIcon from "@mui/icons-material/Receipt";
import { MenuItemType } from "../../components/MenuList/MenuItem";
import { ReferentialMenuItems } from "./referential/ReferentialMenuItems";

export const BackofficeMenuItems: Readonly<MenuItemType[]> = [
  {
    id: "backoffice",
    title: "Gestion",
    collapsed: true,
    children: [
      {
        id: "customers",
        title: "Clients",
        icon: <GroupIcon></GroupIcon>,
        children: [
          {
            id: "manage-customers",
            title: "Gestion clients",
            to: "/backoffice/customers",
            icon: <GroupIcon></GroupIcon>,
          },
          {
            id: "create-customer",
            title: "Ajouter un client",
            to: "/backoffice/customers/create",
            icon: <GroupIcon></GroupIcon>,
          },
        ],
      },
      {
        id: "orders",
        title: "Commandes",
        to: "/backoffice/orders",
        icon: <ReceiptIcon></ReceiptIcon>,
        children: [
          {
            id: "manage-orders",
            title: "Gestion commandes",
            to: "/backoffice/orders",
            icon: <GroupIcon></GroupIcon>,
          },
          {
            id: "create-order",
            title: "Créer une commande",
            to: "/backoffice/orders/create",
            icon: <GroupIcon></GroupIcon>,
          },
        ],
      },
      {
        id: "products",
        title: "Produits",
        to: "/backoffice/products",
        icon: <InventoryIcon></InventoryIcon>,
        children: [
          {
            id: "manage-customers",
            title: "Gestion produits",
            to: "/backoffice/products",
            icon: <GroupIcon></GroupIcon>,
          },
          {
            id: "create-product",
            title: "Ajouter un produit",
            to: "/backoffice/products/create",
            icon: <GroupIcon></GroupIcon>,
          },
        ],
      },
    ],
  },
  ReferentialMenuItems,
];
