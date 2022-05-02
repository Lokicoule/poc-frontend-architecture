import { ValueObject } from "../../../core/domain/ValueObject";

export interface ReferentialViewModelProps<T, U> {
  id: string;
  useCase: T;
  parameters: U[];
}

export class ReferentialViewModel<T, U> extends ValueObject<
  ReferentialViewModelProps<T, U>
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
