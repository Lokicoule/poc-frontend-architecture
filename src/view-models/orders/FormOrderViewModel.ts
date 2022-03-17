export interface FormOrderItemViewModel {
  id: string;
  unitPrice: number;
  amount: number;
  product: string;
}
export interface FormOrderViewModel {
  code?: string;
  customer: string;
  billingDate: Date;
  dueDate: Date;
  items: FormOrderItemViewModel[];
}
