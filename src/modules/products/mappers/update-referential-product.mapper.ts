import { Mapper } from "../../../core/mapper/Mapper";
import {
  ParamReferentialProductViewModel,
  ParamReferentialProductViewModelProps,
} from "../domain/parameter-referential-product.model";
import { ReferentialProductViewModelProps } from "../domain/referential-product.model";
import { UpdateReferentialProductInput } from "../dtos/products.dto.generated";
import { UpdateParamReferentialProductMap } from "./update-param-referential-product.mapper";

export class UpdateReferentialProductMap implements Mapper {
  public static toDto(
    entity: ReferentialProductViewModelProps
  ): UpdateReferentialProductInput {
    return {
      useCase: entity.useCase,
      parameters: UpdateReferentialProductMap.parametersToDto(
        entity.parameters
      ),
    };
  }

  private static parametersToDto(
    parameters: ParamReferentialProductViewModelProps[]
  ) {
    return parameters.map((param) =>
      UpdateParamReferentialProductMap.toDto(
        ParamReferentialProductViewModel.create(param)
      )
    );
  }
}
