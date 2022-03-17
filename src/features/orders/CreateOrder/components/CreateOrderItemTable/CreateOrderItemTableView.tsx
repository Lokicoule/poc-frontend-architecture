import { Button, Grid } from "@mui/material";
import { ColumnProps, Table } from "../../../../../components/Tables";
import { CreateOrderItemViewModel } from "../../../../../view-models/orders";

export type CreateOrderItemTableViewProps = {
  columns: ColumnProps[];
  data: Partial<CreateOrderItemViewModel>[];
  onAppend: () => void;
};

export const CreateOrderItemTableView = ({
  columns,
  data,
  onAppend,
}: CreateOrderItemTableViewProps) => {
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
