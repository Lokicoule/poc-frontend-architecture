import { Mapper } from "../../../core/mapper/Mapper";
import { ParamReferentialProductViewModel } from "../domain/parameter-referential-product.model";
import { UpdateParameterReferentialProductInput } from "../dtos/products.dto.generated";

export class UpdateParamReferentialProductMap implements Mapper {
  public static toDto(
    entity: ParamReferentialProductViewModel
  ): UpdateParameterReferentialProductInput {
    return {
      value: entity.value.toString(),
      key: entity.key,
    };
  }
}
