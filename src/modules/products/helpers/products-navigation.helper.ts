import { featuresRoutesConfig } from "../../app/routes/configs/routes.config";
import { NavigationHelper } from "../../app/routes/helpers/navigation.helper";

class ProductsNavigationHelper extends NavigationHelper {}

export const productsNavigationHelper = new ProductsNavigationHelper(
  featuresRoutesConfig.productsPath
);
