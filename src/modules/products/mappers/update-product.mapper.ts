import { Mapper } from "../../../core/mapper/Mapper";
import { UpdateProductViewModelProps } from "../domain/products.model";
import { UpdateProductInput } from "../dtos/products.dto.generated";

export class UpdateProductMap implements Mapper {
  public static toDto(entity: UpdateProductViewModelProps): UpdateProductInput {
    return {
      code: entity.code.toString(),
      label: entity.label.toString(),
    };
  }
}
