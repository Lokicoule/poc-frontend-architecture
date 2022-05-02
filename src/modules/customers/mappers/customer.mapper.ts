import { Mapper } from "../../../core/mapper/Mapper";
import { CustomerViewModel } from "../domain/customers.model";
import { Customer } from "../dtos/customers.dto.generated";

export class CustomerMap implements Mapper {
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
}
