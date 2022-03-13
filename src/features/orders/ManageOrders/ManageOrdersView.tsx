import SearchIcon from "@mui/icons-material/Search";
import { Button, InputAdornment, Stack, TextField } from "@mui/material";
import { SetStateAction } from "react";
import { Link } from "react-router-dom";
import { Order } from "../../../api/types/types.generated";
import { ColumnProps, EnhancedTable } from "../../../components/Tables";
import { OrderViewModel } from "../../../view-models/orders";

export type ManageOrdersViewProps = {
  data: OrderViewModel[];
  onRemove: (ids: string[]) => Promise<void>;
  onSearch: (event: { target: { value: SetStateAction<string> } }) => void;
};

export const ManageOrdersView = ({
  data = [],
  onRemove,
  onSearch,
}: ManageOrdersViewProps) => {
  const columns: ColumnProps[] = [
    {
      label: "Code commande",
      key: "code",
      sortable: true,
      content: (item: Order) => (
        <Link to={`/backoffice/orders/view/${item.id}`}>{item.code}</Link>
      ),
    },
    {
      label: "Montant commande",
      key: "totalOrder",
      sortable: true,
      content: (order: Order) =>
        order.items?.reduce(
          (acc, item) => acc + item.unitPrice * item.amount,
          0
        ),
    },
    {
      label: "Date commande",
      path: "billingDate",
      key: "billingDate",
      sortable: true,
    },
    {
      label: "Date échéance",
      path: "dueDate",
      key: "dueDate",
      sortable: true,
    },
  ];

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

      <EnhancedTable
        columns={columns}
        data={data}
        title="Liste commandes"
        onRemove={onRemove}
      ></EnhancedTable>
    </>
  );
};
