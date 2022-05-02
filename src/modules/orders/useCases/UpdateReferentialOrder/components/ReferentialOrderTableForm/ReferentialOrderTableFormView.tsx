import { Button, Grid } from "@mui/material";
import { ColumnProps, Table } from "../../../../../../components/Tables";

export type ReferentialOrderTableFormViewProps = {
  columns: ColumnProps[];
  fields: Record<"id", string>[];
  onAppend: () => void;
};

export const ReferentialOrderTableFormView = ({
  columns,
  fields,
  onAppend,
}: ReferentialOrderTableFormViewProps) => {
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
            Ajouter un paramètre
          </Button>
        </Grid>
      </Grid>
      <Table size="small" columns={columns} data={fields}></Table>
    </>
  );
};
