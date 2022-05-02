import { Mapper } from "../../../core/mapper/Mapper";
import {
  ParamReferentialOrderViewModel,
  ParamReferentialOrderViewModelProps,
} from "../domain/parameter-referential-order.model";
import { ReferentialOrderViewModelProps } from "../domain/referential-order.model";
import { UpdateReferentialOrderInput } from "../dtos/orders.dto.generated";
import { UpdateParamReferentialOrderMap } from "./update-param-referential-order.mapper";

export class UpdateReferentialOrderMap implements Mapper {
  public static toDto(
    entity: ReferentialOrderViewModelProps
  ): UpdateReferentialOrderInput {
    return {
      useCase: entity.useCase,
      parameters: UpdateReferentialOrderMap.parametersToDto(entity.parameters),
    };
  }

  private static parametersToDto(
    parameters: ParamReferentialOrderViewModelProps[]
  ) {
    return parameters.map((param) =>
      UpdateParamReferentialOrderMap.toDto(
        ParamReferentialOrderViewModel.create(param)
      )
    );
  }
}
