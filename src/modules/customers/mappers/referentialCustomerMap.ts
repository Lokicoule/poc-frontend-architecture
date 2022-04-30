import { Maybe } from "graphql/jsutils/Maybe";
import { Mapper } from "../../../core/mapper/Mapper";
import { ReferentialCustomerViewModel } from "../domain/ReferentialCustomerViewModel";
import {
  ParameterReferentialCustomer,
  ReferentialCustomer,
} from "../dtos/customers.dto.generated";
import { paramReferentialCustomerMap } from "./paramReferentialCustomerMap";

export class referentialCustomerMap implements Mapper {
  public static toViewModel(
    dto: ReferentialCustomer
  ): ReferentialCustomerViewModel {
    return ReferentialCustomerViewModel.create({
      id: dto.id,
      useCase: dto.useCase,
      parameters: referentialCustomerMap.parametersToViewModel(dto?.parameters),
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
        paramReferentialCustomerMap.toViewModel(param)
      ) ?? []
    );
  }
}
