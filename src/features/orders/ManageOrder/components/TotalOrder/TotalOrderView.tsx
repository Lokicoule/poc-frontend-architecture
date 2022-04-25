import { Stack } from "@mui/material";
import { currency } from "../../../../../core/utils/CurrencyUtils";

type TotalOrderViewProps = {
  value: number;
};

export const TotalOrderView = ({ value }: TotalOrderViewProps) => (
  <Stack
    direction="row"
    alignItems="center"
    justifyContent="space-around"
    mb={5}
    mt={3}
  >
    <h2>Total</h2>
    <h3>{currency.format(value)}</h3>
  </Stack>
);
