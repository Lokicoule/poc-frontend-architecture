import { Mapper } from "../../../core/mapper/Mapper";
import { CreateCustomerViewModel } from "../domain/customers.model";
import { CreateCustomerInput } from "../dtos/customers.dto.generated";

export class CreateCustomerMap implements Mapper {
  public static toDto(entity: CreateCustomerViewModel): CreateCustomerInput {
    return {
      code: entity.code?.toString(),
      naming: entity.naming.toString(),
      address: entity.address.toString(),
      city: entity.city.toString(),
      zipCode: entity.zipCode.toString(),
    };
  }
}
