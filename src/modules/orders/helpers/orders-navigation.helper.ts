import { featuresRoutesConfig } from "../../app/routes/configs/routes.config";
import { NavigationHelper } from "../../app/routes/helpers/navigation.helper";

class OrdersNavigationHelper extends NavigationHelper {
  customerView(id: string) {
    return this.view(id, [featuresRoutesConfig.customerPath]);
  }
}

export const ordersNavigationHelper = new OrdersNavigationHelper(
  featuresRoutesConfig.ordersPath
);
