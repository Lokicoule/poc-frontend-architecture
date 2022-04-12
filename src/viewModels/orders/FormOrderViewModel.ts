export interface FormOrderItemViewModel {
  id: string;
  unitPrice: number;
  amount: number;
  productId: string;
}
export interface FormOrderViewModel {
  code?: string;
  customerId: string;
  billingDate: Date;
  dueDate: Date;
  items: FormOrderItemViewModel[];
}
