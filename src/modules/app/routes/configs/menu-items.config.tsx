import { MenuItemType } from "../../../../components/MenuList/MenuItem";
import GroupIcon from "@mui/icons-material/Group";
import InventoryIcon from "@mui/icons-material/Inventory";
import ReceiptIcon from "@mui/icons-material/Receipt";
import { featuresRoutesConfig, routesConfig } from "./routes.config";
import { absolutePath } from "../helpers/routes.helper";

export const menuItems: Readonly<MenuItemType[]> = [
  {
    id: "home",
    title: "Home",
    to: routesConfig.defaultPath,
    children: [
      {
        id: "customers",
        title: "Clients",
        to: absolutePath([featuresRoutesConfig.customersPath]),
        icon: <GroupIcon></GroupIcon>,
      },
      {
        id: "orders",
        title: "Commandes",
        to: absolutePath([featuresRoutesConfig.ordersPath]),
        icon: <ReceiptIcon></ReceiptIcon>,
      },
      {
        id: "products",
        title: "Produits",
        to: absolutePath([featuresRoutesConfig.productsPath]),
        icon: <InventoryIcon></InventoryIcon>,
      },
    ],
  },
  {
    id: "referential",
    title: "Paramètrage règles de gestion",
    children: [
      {
        id: "customers-referential",
        title: "Paramètrage Client",
        to: absolutePath([
          featuresRoutesConfig.customersPath,
          featuresRoutesConfig.referentialPath,
        ]),
        icon: <GroupIcon></GroupIcon>,
      },
      {
        id: "orders-referential",
        title: "Paramètrage Commande",
        to: absolutePath([
          featuresRoutesConfig.ordersPath,
          featuresRoutesConfig.referentialPath,
        ]),
        icon: <ReceiptIcon></ReceiptIcon>,
      },
      {
        id: "products-referential",
        title: "Paramètrage Produit",
        to: absolutePath([
          featuresRoutesConfig.productsPath,
          featuresRoutesConfig.referentialPath,
        ]),
        icon: <InventoryIcon></InventoryIcon>,
      },
    ],
  },
];
