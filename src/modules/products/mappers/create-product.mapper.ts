import { Mapper } from "../../../core/mapper/Mapper";
import { CreateProductViewModelProps } from "../domain/products.model";
import { CreateProductInput } from "../dtos/products.dto.generated";

export class CreateProductMap implements Mapper {
  public static toDto(entity: CreateProductViewModelProps): CreateProductInput {
    return {
      code: entity.code?.toString(),
      label: entity.label.toString(),
    };
  }
}
