import { Mapper } from "../../../core/mapper/Mapper";
import { ParamReferentialOrderViewModel } from "../domain/parameter-referential-order.model";
import { ParameterReferentialOrder } from "../dtos/orders.dto.generated";

export class ParamReferentialOrderMap implements Mapper {
  public static toViewModel(
    dto: ParameterReferentialOrder
  ): ParamReferentialOrderViewModel {
    return ParamReferentialOrderViewModel.create({
      id: dto.id,
      key: dto.key,
      value: dto.value,
    });
  }
}
