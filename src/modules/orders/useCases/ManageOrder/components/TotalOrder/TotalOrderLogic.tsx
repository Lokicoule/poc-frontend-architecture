import { OrderItemViewModelProps } from "../../../../domain/order-item.model";
import { TotalOrderView } from "./TotalOrderView";

export type TotalOrderLogicProps = {
  data: OrderItemViewModelProps[];
};

export const TotalOrderLogic = ({ data }: TotalOrderLogicProps) => {
  const sum = data?.reduce(
    (acc, item) => acc + item.unitPrice * item.amount,
    0
  );

  return <TotalOrderView value={sum}></TotalOrderView>;
};
