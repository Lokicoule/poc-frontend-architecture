import { featuresRoutesConfig } from "../../app/routes/configs/routes.config";
import { NavigationHelper } from "../../app/routes/helpers/navigation.helper";

class OrdersNavigationHelper extends NavigationHelper {}

export const ordersNavigationHelper = new OrdersNavigationHelper(
  featuresRoutesConfig.ordersPath
);
