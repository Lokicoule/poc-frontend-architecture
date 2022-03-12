import SearchIcon from "@mui/icons-material/Search";
import { Button, InputAdornment, Stack, TextField } from "@mui/material";
import { SetStateAction } from "react";
import { Link } from "react-router-dom";
import { Customer } from "../../../api/types/types.generated";
import { ColumnProps, EnhancedTable } from "../../../components/Tables";
import { CustomerViewModel } from "../../../view-models/customers";

export type ManageCustomersViewProps = {
  data: CustomerViewModel[];
  onRemove: (ids: string[]) => Promise<void>;
  onSearch: (event: { target: { value: SetStateAction<string> } }) => void;
};

export const ManageCustomersView = ({
  data = [],
  onRemove,
  onSearch,
}: ManageCustomersViewProps) => {
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
          to="/backoffice/customers/create"
        >
          Ajouter un nouveau client
        </Button>
      </Stack>

      <EnhancedTable
        columns={columns}
        data={data}
        title="Liste clients"
        onRemove={onRemove}
      ></EnhancedTable>
    </>
  );
};
