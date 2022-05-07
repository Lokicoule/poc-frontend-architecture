import { CrumbProps } from "../../../../components/Breadcrumbs";
import {
  absoluteCreatePath,
  absolutePath,
  absoluteUpdatePath,
  absoluteViewPath,
} from "../helpers/routes.helper";
import { featuresRoutesConfig } from "./routes.config";

export const customersBreadcrumbs: Readonly<CrumbProps> = {
  [absolutePath([featuresRoutesConfig.customersPath])]: { alias: "Clients" },
  [absoluteCreatePath([featuresRoutesConfig.customersPath])]: {
    alias: "Ajouter client",
    last: true,
  },
  [absoluteViewPath([featuresRoutesConfig.customersPath])]: {
    alias: "Information client",
    last: true,
  },
  [absoluteUpdatePath([featuresRoutesConfig.customersPath])]: {
    alias: "Mise à jour client",
    last: true,
  },
  [absolutePath([
    featuresRoutesConfig.customersPath,
    featuresRoutesConfig.referentialPath,
  ])]: { alias: "Paramétrage" },
  [absoluteUpdatePath([
    featuresRoutesConfig.customersPath,
    featuresRoutesConfig.referentialPath,
  ])]: {
    alias: "Mise à jour",
    last: true,
  },
};

export const ordersBreadcrumbs: Readonly<CrumbProps> = {
  [absolutePath([featuresRoutesConfig.ordersPath])]: { alias: "Commande" },
  [absoluteCreatePath([featuresRoutesConfig.ordersPath])]: {
    alias: "Ajouter commande",
    last: true,
  },
  [absoluteViewPath([featuresRoutesConfig.ordersPath])]: {
    alias: "Information commande",
    last: true,
  },
  [absoluteUpdatePath([featuresRoutesConfig.ordersPath])]: {
    alias: "Mise à jour commande",
    last: true,
  },
  [absolutePath([
    featuresRoutesConfig.ordersPath,
    featuresRoutesConfig.referentialPath,
  ])]: { alias: "Paramétrage" },
  [absoluteUpdatePath([
    featuresRoutesConfig.ordersPath,
    featuresRoutesConfig.referentialPath,
  ])]: {
    alias: "Mise à jour",
    last: true,
  },
};

export const productsBreadcrumbs: Readonly<CrumbProps> = {
  [absolutePath([featuresRoutesConfig.productsPath])]: { alias: "Produits" },
  [absoluteCreatePath([featuresRoutesConfig.productsPath])]: {
    alias: "Ajouter produit",
    last: true,
  },
  [absoluteViewPath([featuresRoutesConfig.productsPath])]: {
    alias: "Information produit",
    last: true,
  },
  [absoluteUpdatePath([featuresRoutesConfig.productsPath])]: {
    alias: "Mise à jour produit",
    last: true,
  },
  [absolutePath([
    featuresRoutesConfig.productsPath,
    featuresRoutesConfig.referentialPath,
  ])]: { alias: "Paramétrage" },
  [absoluteUpdatePath([
    featuresRoutesConfig.productsPath,
    featuresRoutesConfig.referentialPath,
  ])]: {
    alias: "Mise à jour",
    last: true,
  },
};
