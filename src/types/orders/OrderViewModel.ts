import { OrderItemViewModel } from "./OrderItemViewModel";
import { CustomerViewModel } from "../customers/CustomerViewModel";

export interface OrderViewModel {
  code: string;
  id: string;
  billingDate: Date;
  dueDate: Date;
  items: OrderItemViewModel[];
  customer: Partial<CustomerViewModel>;
}
