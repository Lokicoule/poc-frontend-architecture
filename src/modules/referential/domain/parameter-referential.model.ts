import { ValueObject } from "../../../core/domain/ValueObject";

export interface ParamReferentialViewModelProps<T> {
  id: string;
  key: T;
  value: string;
}
export class ParamReferentialViewModel<T> extends ValueObject<
  ParamReferentialViewModelProps<T>
> {
  get id() {
    return this.props.id;
  }

  get key() {
    return this.props.key;
  }

  get value() {
    return this.props.value;
  }
}
