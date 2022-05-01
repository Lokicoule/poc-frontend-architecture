import { Mapper } from "../../../core/mapper/Mapper";
import { ParamReferentialProductViewModel } from "../domain/parameter-referential.model";
import { ParameterReferentialProduct } from "../dtos/products.dto.generated";

export class ParamReferentialProductMap implements Mapper {
  public static toViewModel(
    dto: ParameterReferentialProduct
  ): ParamReferentialProductViewModel {
    return ParamReferentialProductViewModel.create({
      id: dto.id,
      key: dto.key,
      value: dto.value,
    });
  }

  public static toDto(
    entity: ParamReferentialProductViewModel
  ): ParameterReferentialProduct {
    return {
      id: entity.id.toString(),
      value: entity.value.toString(),
      key: entity.key,
    };
  }
}
