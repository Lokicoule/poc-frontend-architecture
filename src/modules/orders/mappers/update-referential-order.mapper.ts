import { Mapper } from "../../../core/mapper/Mapper";
import {
  ParamReferentialOrderViewModel,
  ParamReferentialOrderViewModelProps,
} from "../domain/parameter-referential.model";
import { ReferentialOrderViewModelProps } from "../domain/referential-order.model";
import { UpdateReferentialOrderInput } from "../dtos/orders.dto.generated";
import { ParamReferentialOrderMap } from "./param-referential.mapper";

export class UpdateReferentialOrderMap implements Mapper {
  public static toDto(
    entity: ReferentialOrderViewModelProps
  ): UpdateReferentialOrderInput {
    return {
      id: entity.id.toString(),
      useCase: entity.useCase,
      parameters: UpdateReferentialOrderMap.parametersToDto(entity.parameters),
    };
  }

  private static parametersToDto(
    parameters: ParamReferentialOrderViewModelProps[]
  ) {
    return parameters.map((param) =>
      ParamReferentialOrderMap.toDto(
        ParamReferentialOrderViewModel.create(param)
      )
    );
  }
}
