import { Button, Grid } from "@mui/material";
import { ColumnProps, Table } from "../../../../../components/Tables";
import { ReferentialParamsViewModel } from "../../../../../types/referential";

export type ReferentialParamsTableFormViewProps = {
  columns: ColumnProps[];
  data: Partial<ReferentialParamsViewModel>[];
  onAppend: () => void;
};

export const ReferentialParamsTableFormView = ({
  columns,
  data,
  onAppend,
}: ReferentialParamsTableFormViewProps) => {
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
      <Table size="small" columns={columns} data={data}></Table>
    </>
  );
};
