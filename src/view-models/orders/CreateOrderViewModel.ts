export interface CreateOrderItemViewModel {
  id: string;
  unitPrice: number;
  amount: number;
  product: string;
}
export interface CreateOrderViewModel {
  code?: string;
  customer: string;
  billingDate: Date;
  dueDate: Date;
  items: CreateOrderItemViewModel[];
}
