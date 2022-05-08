import { Mapper } from "../../../core/mapper/Mapper";
import {
  OrderItemViewModel,
  OrderItemViewModelProps,
} from "../domain/order-item.model";
import { OrderItem, OrderItemInput } from "../dtos/orders.dto.generated";
import { OrderProductMap } from "./order-product.mapper";

export class OrderItemMap implements Mapper {
  public static toViewModel(dto: OrderItem): OrderItemViewModel {
    return OrderItemViewModel.create({
      id: dto.id,
      amount: dto.amount,
      unitPrice: dto.unitPrice,
      product: OrderProductMap.toViewModel(
        dto.product ?? {
          id: "",
          code: "",
          label: "",
        }
      ).props,
    });
  }

  public static toDto(entity: OrderItemViewModelProps): OrderItemInput {
    return {
      amount: entity.amount,
      unitPrice: entity.unitPrice,
      product: OrderProductMap.toDto(entity.product),
    };
  }
}
