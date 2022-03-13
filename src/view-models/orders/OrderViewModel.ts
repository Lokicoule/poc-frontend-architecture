import { OrderItemViewModel } from "./OrderItemViewModel";

export interface OrderViewModel {
  code: string;
  id: string;
  billingDate?: Date | null;
  dueDate?: Date | null;
  items: OrderItemViewModel[];
}
