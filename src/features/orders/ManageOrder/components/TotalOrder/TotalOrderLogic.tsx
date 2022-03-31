import { OrderItemViewModel } from "../../../../../types/orders";
import { TotalOrderView } from "./TotalOrderView";

export type TotalOrderLogicProps = {
  data: OrderItemViewModel[];
};

export const TotalOrderLogic = ({ data }: TotalOrderLogicProps) => {
  const sum = data?.reduce(
    (acc, item) => acc + item.unitPrice * item.amount,
    0
  );

  return <TotalOrderView value={sum}></TotalOrderView>;
};
