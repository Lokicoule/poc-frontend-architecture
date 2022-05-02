import { Mapper } from "../../../core/mapper/Mapper";
import { ParamReferentialCustomerViewModel } from "../domain/parameter-referential-customer.model";
import { UpdateParameterReferentialCustomerInput } from "../dtos/customers.dto.generated";

export class UpdateParamReferentialCustomerMap implements Mapper {
  public static toDto(
    entity: ParamReferentialCustomerViewModel
  ): UpdateParameterReferentialCustomerInput {
    return {
      value: entity.value.toString(),
      key: entity.key,
    };
  }
}
