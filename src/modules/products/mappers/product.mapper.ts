import { Mapper } from "../../../core/mapper/Mapper";
import { ProductViewModel } from "../domain/products.model";
import { Product } from "../dtos/products.dto.generated";

export class ProductMap implements Mapper {
  public static toViewModel(dto: Product): ProductViewModel {
    return ProductViewModel.create({
      id: dto.id,
      code: dto.code,
      label: dto.label,
    });
  }

  public static toDto(entity: ProductViewModel): Product {
    return {
      id: entity.id.toString(),
      code: entity.code.toString(),
      label: entity.label.toString(),
    };
  }
}