import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment, Stack, TextField } from "@mui/material";
import { SetStateAction } from "react";
import { ResponsiveLinkButton } from "../../../../components/ResponsiveButton";
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

        <ResponsiveLinkButton
          label="Ajouter un nouveau produit"
          to="/backoffice/products/create"
          iconComponent={<AddIcon></AddIcon>}
        ></ResponsiveLinkButton>
      </Stack>
      <ProductsTable data={data} onRemove={onRemove}></ProductsTable>
    </>
  );
};
