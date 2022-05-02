import { Maybe } from "graphql/jsutils/Maybe";
import { Mapper } from "../../../core/mapper/Mapper";
import { ReferentialOrderViewModel } from "../domain/referential-order.model";
import {
  ParameterReferentialOrder,
  ReferentialOrder,
} from "../dtos/orders.dto.generated";
import { ParamReferentialOrderMap } from "./param-referential.mapper";

export class ReferentialOrderMap implements Mapper {
  public static toViewModel(dto: ReferentialOrder): ReferentialOrderViewModel {
    return ReferentialOrderViewModel.create({
      id: dto.id,
      useCase: dto.useCase,
      parameters: ReferentialOrderMap.parametersToViewModel(dto?.parameters),
    });
  }

  private static parametersToViewModel(
    parameters?: Maybe<ParameterReferentialOrder[]> | undefined
  ) {
    return (
      parameters?.map(
        (param) => ParamReferentialOrderMap.toViewModel(param).props
      ) ?? []
    );
  }
}
