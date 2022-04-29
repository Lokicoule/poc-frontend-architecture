export type BaseCallbackOptions<TData = any> = {
  onCompleted?: (data: TData) => void;
  onError?: (error: Error) => void;
};
