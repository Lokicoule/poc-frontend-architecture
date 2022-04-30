export interface ParamReferentialViewModelProps<T> {
  id: string;
  key: T;
  value: string;
}

export interface ReferentialViewModelProps<T, U> {
  id: string;
  useCase: T;
  parameters: U[];
}
