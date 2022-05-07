import { useCasesRoutesConfig } from "../configs/routes.config";

export const absolutePath = (paths: Array<String>) =>
  "/".concat(relativePath(paths));

export const relativePath = (paths: Array<String>) => paths.join("/");

export const absoluteViewPath = (paths: Array<String>) =>
  absolutePath([...paths, useCasesRoutesConfig.viewPath]);

export const absoluteCreatePath = (paths: Array<String>) =>
  absolutePath([...paths, useCasesRoutesConfig.createPath]);

export const absoluteUpdatePath = (paths: Array<String>) =>
  absolutePath([...paths, useCasesRoutesConfig.updatePath]);

export const relativeViewPath = (paths: Array<String>) =>
  relativePath([...paths, useCasesRoutesConfig.viewPath]);

export const relativeCreatePath = (paths: Array<String>) =>
  relativePath([...paths, useCasesRoutesConfig.createPath]);

export const relativeUpdatePath = (paths: Array<String>) =>
  relativePath([...paths, useCasesRoutesConfig.updatePath]);
