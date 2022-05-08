import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment, Stack, TextField } from "@mui/material";
import { SetStateAction } from "react";
import { ResponsiveLinkButton } from "../../../../components/ResponsiveButton";
import { ordersNavigationHelper } from "../../helpers/orders-navigation.helper";
import { OrdersTable, OrdersTableProps } from "./components/OrdersTable";

export type ManageOrdersViewProps = Pick<
  OrdersTableProps,
  "data" | "onRemove"
> & {
  onSearch: (event: { target: { value: SetStateAction<string> } }) => void;
};

export const ManageOrdersView = ({
  data = [],
  onRemove,
  onSearch,
}: ManageOrdersViewProps) => {
  return (
    <>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        mb={5}
        mt={3}
      >
        <TextField
          label="Rechercher"
          onChange={onSearch}
          variant="standard"
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        ></TextField>

        <ResponsiveLinkButton
          label="Ajouter une nouvelle commande"
          to={ordersNavigationHelper.create()}
          iconComponent={<AddIcon></AddIcon>}
        ></ResponsiveLinkButton>
      </Stack>
      <OrdersTable data={data} onRemove={onRemove}></OrdersTable>
    </>
  );
};
