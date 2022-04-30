import { Mapper } from "../../../core/mapper/Mapper";
import { CustomerViewModel } from "../domain/customers.model";
import { Customer } from "../dtos/customers.dto.generated";

export class customerMap implements Mapper {
  public static toViewModel(dto: Customer): CustomerViewModel {
    return CustomerViewModel.create({
      id: dto.id,
      code: dto.code,
      naming: dto.naming,
      address: dto.address,
      city: dto.city,
      zipCode: dto.zipCode,
    });
  }

  public static toDto(entity: CustomerViewModel): Customer {
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
