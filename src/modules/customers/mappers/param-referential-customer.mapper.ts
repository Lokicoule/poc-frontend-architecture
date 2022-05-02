import { Mapper } from "../../../core/mapper/Mapper";
import { ParamReferentialCustomerViewModel } from "../domain/parameter-referential-customer.model";
import { ParameterReferentialCustomer } from "../dtos/customers.dto.generated";

export class ParamReferentialCustomerMap implements Mapper {
  public static toViewModel(
    dto: ParameterReferentialCustomer
  ): ParamReferentialCustomerViewModel {
    return ParamReferentialCustomerViewModel.create({
      id: dto.id,
      key: dto.key,
      value: dto.value,
    });
  }
}
