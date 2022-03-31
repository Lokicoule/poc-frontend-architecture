import { Button, Grid } from "@mui/material";
import { ColumnProps, Table } from "../../../../../components/Tables";
import { FormOrderItemViewModel } from "../../../../../viewModels/orders";

export type OrderItemTableFormViewProps = {
  columns: ColumnProps[];
  data: Partial<FormOrderItemViewModel>[];
  onAppend: () => void;
};

export const OrderItemTableFormView = ({
  columns,
  data,
  onAppend,
}: OrderItemTableFormViewProps) => {
  return (
    <>
      <Grid
        container
        justifyContent={"flex-end"}
        sx={{ mt: 3, mb: 2 }}
        spacing={3}
      >
        <Grid item>
          <Button
            variant="contained"
            style={{ textTransform: "none" }}
            onClick={onAppend}
          >
            Ajouter un produit
          </Button>
        </Grid>
      </Grid>
      <Table size="small" columns={columns} data={data}></Table>
    </>
  );
};
