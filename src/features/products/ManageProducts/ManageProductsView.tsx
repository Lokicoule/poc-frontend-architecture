import SearchIcon from "@mui/icons-material/Search";
import { Button, InputAdornment, Stack, TextField } from "@mui/material";
import { SetStateAction } from "react";
import { Link } from "react-router-dom";
import { ProductsTable, ProductsTableProps } from "./components/ProductsTable";

export type ManageProductsViewProps = Pick<
  ProductsTableProps,
  "data" | "onRemove"
> & {
  onSearch: (event: { target: { value: SetStateAction<string> } }) => void;
};

export const ManageProductsView = ({
  data = [],
  onRemove,
  onSearch,
}: ManageProductsViewProps) => {
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

      <ProductsTable data={data} onRemove={onRemove}></ProductsTable>
    </>
  );
};
