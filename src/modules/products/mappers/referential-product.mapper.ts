import { Maybe } from "graphql/jsutils/Maybe";
import { Mapper } from "../../../core/mapper/Mapper";
import { ReferentialProductViewModel } from "../domain/referential-product.model";
import {
  ParameterReferentialProduct,
  ReferentialProduct,
} from "../dtos/products.dto.generated";
import { ParamReferentialProductMap } from "./param-referential-product.mapper";

export class ReferentialProductMap implements Mapper {
  public static toViewModel(
    dto: ReferentialProduct
  ): ReferentialProductViewModel {
    return ReferentialProductViewModel.create({
      id: dto.id,
      useCase: dto.useCase,
      parameters: ReferentialProductMap.parametersToViewModel(dto?.parameters),
    });
  }

  private static parametersToViewModel(
    parameters?: Maybe<ParameterReferentialProduct[]> | undefined
  ) {
    return (
      parameters?.map(
        (param) => ParamReferentialProductMap.toViewModel(param).props
      ) ?? []
    );
  }
}
