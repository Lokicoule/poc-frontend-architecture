import { Mapper } from "../../../core/mapper/Mapper";
import {
  OrderProductViewModel,
  OrderProductViewModelProps,
} from "../domain/order-product.model";
import { OrderProduct, OrderProductInput } from "../dtos/orders.dto.generated";

export class OrderProductMap implements Mapper {
  public static toViewModel(dto: OrderProduct): OrderProductViewModel {
    return OrderProductViewModel.create({
      id: dto.id,
      code: dto.code,
      label: dto.label,
    });
  }

  public static toDto(entity: OrderProductViewModelProps): OrderProductInput {
    return {
      id: entity.id.toString(),
      code: entity.code.toString(),
      label: entity.label.toString(),
    };
  }
}
