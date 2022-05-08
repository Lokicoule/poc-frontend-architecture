import { Mapper } from "../../../core/mapper/Mapper";
import { OrderItemViewModelProps } from "../domain/order-item.model";
import { UpdateOrderViewModelProps } from "../domain/orders.model";
import { UpdateOrderInput } from "../dtos/orders.dto.generated";
import { OrderCustomerMap } from "./order-customer.mapper";
import { OrderItemMap } from "./order-item.mapper";

export class UpdateOrderMap implements Mapper {
  public static toDto(entity: UpdateOrderViewModelProps): UpdateOrderInput {
    return {
      code: entity.code.toString(),
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
