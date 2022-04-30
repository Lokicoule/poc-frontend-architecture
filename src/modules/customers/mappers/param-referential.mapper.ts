import { Mapper } from "../../../core/mapper/Mapper";
import { ParamReferentialCustomerViewModel } from "../domain/parameter-referential.model";
import { ParameterReferentialCustomer } from "../dtos/customers.dto.generated";

export class paramReferentialCustomerMap implements Mapper {
  public static toViewModel(
    dto: ParameterReferentialCustomer
  ): ParamReferentialCustomerViewModel {
    return ParamReferentialCustomerViewModel.create({
      id: dto.id,
      key: dto.key,
      value: dto.value,
    });
  }

  public static toDto(
    entity: ParamReferentialCustomerViewModel
  ): ParameterReferentialCustomer {
    return {
      id: entity.id.toString(),
      value: entity.value.toString(),
      key: entity.key,
    };
  }
}
