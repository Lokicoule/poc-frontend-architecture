import { Mapper } from "../../../core/mapper/Mapper";
import { OrderViewModel } from "../domain/orders.model";
import { Maybe, Order, OrderItem } from "../dtos/orders.dto.generated";
import { OrderCustomerMap } from "./order-customer.mapper";
import { OrderItemMap } from "./order-item.mapper";

export class OrderMap implements Mapper {
  public static toViewModel(dto: Order): OrderViewModel {
    return OrderViewModel.create({
      id: dto.id,
      code: dto.code,
      billingDate: new Date(dto.billingDate),
      dueDate: new Date(dto.dueDate),
      customer: OrderCustomerMap.toViewModel(dto.customer).props,
      items: this.itemsToViewModel(dto.items),
    });
  }

  private static itemsToViewModel(items?: Maybe<OrderItem[]> | undefined) {
    return items?.map((item) => OrderItemMap.toViewModel(item).props) ?? [];
  }
}
