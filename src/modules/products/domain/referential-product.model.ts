import {
  ReferentialViewModel,
  ReferentialViewModelProps,
} from "../../referential/domain/referential.model";
import { UseCaseReferentialEnum } from "../dtos/products.dto.generated";
import { ParamReferentialProductViewModelProps } from "./parameter-referential-product.model";

export interface ReferentialProductViewModelProps
  extends ReferentialViewModelProps<
    UseCaseReferentialEnum,
    ParamReferentialProductViewModelProps
  > {}

export class ReferentialProductViewModel extends ReferentialViewModel<
  UseCaseReferentialEnum,
  ParamReferentialProductViewModelProps
> {
  public static create(
    props: ReferentialProductViewModelProps
  ): ReferentialProductViewModel {
    return new ReferentialProductViewModel(props);
  }
}
