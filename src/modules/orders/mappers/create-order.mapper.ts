import { Mapper } from "../../../core/mapper/Mapper";
import { OrderItemViewModelProps } from "../domain/order-item.model";
import { CreateOrderViewModelProps } from "../domain/orders.model";
import { CreateOrderInput } from "../dtos/orders.dto.generated";
import { OrderCustomerMap } from "./order-customer.mapper";
import { OrderItemMap } from "./order-item.mapper";

export class CreateOrderMap implements Mapper {
  public static toDto(entity: CreateOrderViewModelProps): CreateOrderInput {
    return {
      code: entity.code?.toString(),
      billingDate: entity.billingDate,
      dueDate: entity.dueDate,
      customer: OrderCustomerMap.toDto(entity.customer),
      items: this.itemsToDto(entity.items),
    };
  }
  private static itemsToDto(items: OrderItemViewModelProps[]) {
    return items?.map((item) => OrderItemMap.toDto(item)) ?? [];
  }
}
