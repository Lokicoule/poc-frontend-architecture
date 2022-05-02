import {
  ReferentialViewModel,
  ReferentialViewModelProps,
} from "../../referential/domain/referential.model";
import { UseCaseReferentialEnum } from "../dtos/orders.dto.generated";
import { ParamReferentialOrderViewModelProps } from "./parameter-referential-order.model";

export interface ReferentialOrderViewModelProps
  extends ReferentialViewModelProps<
    UseCaseReferentialEnum,
    ParamReferentialOrderViewModelProps
  > {}

export class ReferentialOrderViewModel extends ReferentialViewModel<
  UseCaseReferentialEnum,
  ParamReferentialOrderViewModelProps
> {
  public static create(
    props: ReferentialOrderViewModelProps
  ): ReferentialOrderViewModel {
    return new ReferentialOrderViewModel(props);
  }
}
