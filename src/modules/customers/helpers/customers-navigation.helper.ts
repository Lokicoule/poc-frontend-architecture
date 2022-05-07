import { featuresRoutesConfig } from "../../app/routes/configs/routes.config";
import { NavigationHelper } from "../../app/routes/helpers/navigation.helper";

class CustomersNavigationHelper extends NavigationHelper {}

export const customersNavigationHelper = new CustomersNavigationHelper(
  featuresRoutesConfig.customersPath
);
