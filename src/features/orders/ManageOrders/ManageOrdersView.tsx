import SearchIcon from "@mui/icons-material/Search";
import { Button, InputAdornment, Stack, TextField } from "@mui/material";
import { SetStateAction } from "react";
import { Link } from "react-router-dom";
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
        <Button
          component={Link}
          variant="contained"
          style={{ textTransform: "none" }}
          to="/backoffice/orders/create"
        >
          Ajouter une nouvelle commande
        </Button>
      </Stack>

      <OrdersTable data={data} onRemove={onRemove}></OrdersTable>
    </>
  );
};
