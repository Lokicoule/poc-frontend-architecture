import SearchIcon from "@mui/icons-material/Search";
import { Button, Grid, InputAdornment, TextField } from "@mui/material";
import { SetStateAction } from "react";
import { Link } from "react-router-dom";
import { Customer } from "../../../api/types/types.generated";
import { ColumnProps, EnhancedTable } from "../../../components/Tables";
import { CustomerViewModel } from "../../../view-models/domain/customers";

export interface Props {
  data: CustomerViewModel[];
  onRemove: (ids: string[]) => Promise<void>;
  onSearch: (event: { target: { value: SetStateAction<string> } }) => void;
}

export const ManageCustomersView = ({
  data = [],
  onRemove,
  onSearch,
}: Props) => {
  const columns: ColumnProps[] = [
    {
      label: "Code client",
      key: "code",
      sortable: true,
      content: (item: Customer) => (
        <Link to={`/backoffice/customers/view/${item.id}`}>{item.code}</Link>
      ),
    },
    {
      label: "Nom",
      path: "naming",
      key: "naming",
      sortable: true,
    },
    {
      label: "Adresse",
      path: "address",
      key: "address",
      sortable: true,
    },
    {
      label: "Code postal",
      path: "zipCode",
      key: "zipCode",
      sortable: true,
    },
  ];

  return (
    <>
      <Grid mt={2} mb={2} container justifyContent={"space-between"}>
        <Grid item>
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
        </Grid>
        <Grid item>
          <Button style={{ textTransform: "none" }} variant="contained">
            Ajouter un nouveau client
          </Button>
        </Grid>
      </Grid>
      <EnhancedTable
        columns={columns}
        data={data}
        title="Liste clients"
        onRemove={onRemove}
      ></EnhancedTable>
    </>
  );
};
