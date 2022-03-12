import SearchIcon from "@mui/icons-material/Search";
import { Button, InputAdornment, Stack, TextField } from "@mui/material";
import { SetStateAction } from "react";
import { Link } from "react-router-dom";
import { Product } from "../../../api/types/types.generated";
import { ColumnProps, EnhancedTable } from "../../../components/Tables";
import { ProductViewModel } from "../../../view-models/domain/products";

export type ManageProductsViewProps = {
  data: ProductViewModel[];
  onRemove: (ids: string[]) => Promise<void>;
  onSearch: (event: { target: { value: SetStateAction<string> } }) => void;
};

export const ManageProductsView = ({
  data = [],
  onRemove,
  onSearch,
}: ManageProductsViewProps) => {
  const columns: ColumnProps[] = [
    {
      label: "Code produit",
      key: "code",
      sortable: true,
      content: (item: Product) => (
        <Link to={`/backoffice/products/view/${item.id}`}>{item.code}</Link>
      ),
    },
    {
      label: "Label",
      path: "label",
      key: "label",
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
          to="/backoffice/products/create"
        >
          Ajouter un nouveau produit
        </Button>
      </Stack>

      <EnhancedTable
        columns={columns}
        data={data}
        title="Liste produits"
        onRemove={onRemove}
      ></EnhancedTable>
    </>
  );
};
