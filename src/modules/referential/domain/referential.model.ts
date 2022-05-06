import { ValueObject } from "../../../core/domain/ValueObject";

export interface ReferentialViewModelProps<
  TypeUseCaseReferentialEnum,
  TypeParameterReferentialProps
> {
  id: string;
  useCase: TypeUseCaseReferentialEnum;
  parameters: TypeParameterReferentialProps[];
}

export class ReferentialViewModel<
  TypeUseCaseReferentialEnum,
  TypeParameterReferentialProps
> extends ValueObject<
  ReferentialViewModelProps<
    TypeUseCaseReferentialEnum,
    TypeParameterReferentialProps
  >
> {
  get id() {
    return this.props.id;
  }

  get useCase() {
    return this.props.useCase;
  }

  get parameters() {
    return this.props.parameters;
  }
}
