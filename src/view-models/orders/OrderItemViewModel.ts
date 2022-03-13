import { ProductViewModel } from "../products";

export interface OrderItemViewModel {
  id: string;
  unitPrice: number;
  amount: number;
  product: ProductViewModel;
}
