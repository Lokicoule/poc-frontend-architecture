import { Mapper } from "../../../core/mapper/Mapper";
import { ParamReferentialOrderViewModel } from "../domain/parameter-referential-order.model";
import { UpdateParameterReferentialOrderInput } from "../dtos/orders.dto.generated";

export class UpdateParamReferentialOrderMap implements Mapper {
  public static toDto(
    entity: ParamReferentialOrderViewModel
  ): UpdateParameterReferentialOrderInput {
    return {
      value: entity.value.toString(),
      key: entity.key,
    };
  }
}
