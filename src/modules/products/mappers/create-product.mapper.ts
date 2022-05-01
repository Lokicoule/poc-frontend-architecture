import { Mapper } from "../../../core/mapper/Mapper";
import { CreateProductViewModel } from "../domain/products.model";
import { CreateProductInput } from "../dtos/products.dto.generated";

export class CreateProductMap implements Mapper {
  public static toDto(entity: CreateProductViewModel): CreateProductInput {
    return {
      code: entity.code?.toString(),
      label: entity.label.toString(),
    };
  }
}
