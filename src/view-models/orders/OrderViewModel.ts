import { OrderItemViewModel } from "./OrderItemViewModel";
import { CustomerViewModel } from "../customers/CustomerViewModel";

export interface OrderViewModel {
  code: string;
  id: string;
  billingDate?: Date | null;
  dueDate?: Date | null;
  items: OrderItemViewModel[];
  customer: Partial<CustomerViewModel>;
}
