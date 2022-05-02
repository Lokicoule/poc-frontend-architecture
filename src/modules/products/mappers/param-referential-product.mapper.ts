import { Mapper } from "../../../core/mapper/Mapper";
import { ParamReferentialProductViewModel } from "../domain/parameter-referential-product.model";
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
}
