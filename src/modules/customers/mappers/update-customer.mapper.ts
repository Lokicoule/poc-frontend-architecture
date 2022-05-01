import { Mapper } from "../../../core/mapper/Mapper";
import { UpdateCustomerViewModelProps } from "../domain/customers.model";
import { UpdateCustomerInput } from "../dtos/customers.dto.generated";

export class UpdateCustomerMap implements Mapper {
  public static toDto(
    entity: UpdateCustomerViewModelProps
  ): UpdateCustomerInput {
    return {
      code: entity.code.toString(),
      naming: entity.naming.toString(),
      address: entity.address.toString(),
      city: entity.city.toString(),
      zipCode: entity.zipCode.toString(),
    };
  }
}
