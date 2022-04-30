import { Maybe } from "graphql/jsutils/Maybe";
import { Mapper } from "../../../core/mapper/Mapper";
import { ReferentialCustomerViewModel } from "../domain/referential-customer.model";
import {
  ParameterReferentialCustomer,
  ReferentialCustomer,
} from "../dtos/customers.dto.generated";
import { ParamReferentialCustomerMap } from "./param-referential.mapper";

export class ReferentialCustomerMap implements Mapper {
  public static toViewModel(
    dto: ReferentialCustomer
  ): ReferentialCustomerViewModel {
    return ReferentialCustomerViewModel.create({
      id: dto.id,
      useCase: dto.useCase,
      parameters: ReferentialCustomerMap.parametersToViewModel(dto?.parameters),
    });
  }

  public static toDto(
    entity: ReferentialCustomerViewModel
  ): ReferentialCustomer {
    return {
      id: entity.id.toString(),
      useCase: entity.useCase,
      parameters: entity.parameters,
    };
  }

  private static parametersToViewModel(
    parameters?: Maybe<ParameterReferentialCustomer[]> | undefined
  ) {
    return (
      parameters?.map((param) =>
        ParamReferentialCustomerMap.toViewModel(param)
      ) ?? []
    );
  }
}
