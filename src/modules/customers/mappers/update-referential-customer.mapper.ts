import { Mapper } from "../../../core/mapper/Mapper";
import {
  ParamReferentialCustomerViewModel,
  ParamReferentialCustomerViewModelProps,
} from "../domain/parameter-referential-customer.model";
import { ReferentialCustomerViewModelProps } from "../domain/referential-customer.model";
import { UpdateReferentialCustomerInput } from "../dtos/customers.dto.generated";
import { UpdateParamReferentialCustomerMap } from "./update-param-referential-customer.mapper";

export class UpdateReferentialCustomerMap implements Mapper {
  public static toDto(
    entity: ReferentialCustomerViewModelProps
  ): UpdateReferentialCustomerInput {
    return {
      useCase: entity.useCase,
      parameters: UpdateReferentialCustomerMap.parametersToDto(
        entity.parameters
      ),
    };
  }

  private static parametersToDto(
    parameters: ParamReferentialCustomerViewModelProps[]
  ) {
    return parameters.map((param) =>
      UpdateParamReferentialCustomerMap.toDto(
        ParamReferentialCustomerViewModel.create(param)
      )
    );
  }
}
