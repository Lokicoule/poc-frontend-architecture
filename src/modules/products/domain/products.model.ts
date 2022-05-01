import { ValueObject } from "../../../core/domain/ValueObject";

export interface ProductViewModelProps {
  code: string;
  id: string;
  label: string;
}

export interface UpdateProductViewModelProps
  extends Omit<ProductViewModelProps, "id"> {}

export interface CreateProductViewModelProps
  extends Omit<UpdateProductViewModelProps, "code">,
    Partial<Pick<UpdateProductViewModelProps, "code">> {}

export class ProductViewModel extends ValueObject<ProductViewModelProps> {
  get id() {
    return this.props.id;
  }

  get code() {
    return this.props.code;
  }

  get label() {
    return this.props.label;
  }

  public static create(props: ProductViewModelProps): ProductViewModel {
    return new ProductViewModel(props);
  }
}
