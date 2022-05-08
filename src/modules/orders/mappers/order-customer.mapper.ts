import { Mapper } from "../../../core/mapper/Mapper";
import {
  OrderCustomerViewModel,
  OrderCustomerViewModelProps,
} from "../domain/order-customer.model";
import {
  OrderCustomer,
  OrderCustomerInput,
} from "../dtos/orders.dto.generated";

export class OrderCustomerMap implements Mapper {
  public static toViewModel(dto: OrderCustomer): OrderCustomerViewModel {
    return OrderCustomerViewModel.create({
      id: dto.id,
      code: dto.code,
      naming: dto.naming,
      address: dto.address,
      city: dto.city,
      zipCode: dto.zipCode,
    });
  }

  public static toDto(entity: OrderCustomerViewModelProps): OrderCustomerInput {
    return {
      id: entity.id.toString(),
      code: entity.code.toString(),
      naming: entity.naming.toString(),
      address: entity.address.toString(),
      city: entity.city.toString(),
      zipCode: entity.zipCode.toString(),
    };
  }
}
