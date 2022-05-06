import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment, Stack, TextField } from "@mui/material";
import { SetStateAction } from "react";
import { ReferentialTable } from "../../../referential/components/ReferentialTable";
import { ParamReferentialProductViewModelProps } from "../../domain/parameter-referential-product.model";
import { ReferentialProductViewModel } from "../../domain/referential-product.model";
import {
  ParameterReferentialEnum,
  UseCaseReferentialEnum,
} from "../../dtos/products.dto.generated";

export type ManageReferentialProductViewProps = {
  referentialProductList: ReferentialProductViewModel[];
  onSearch: (event: { target: { value: SetStateAction<string> } }) => void;
};

export const ManageReferentialProductView = ({
  referentialProductList = [],
  onSearch,
}: ManageReferentialProductViewProps) => {
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
      </Stack>

      <ReferentialTable<
        UseCaseReferentialEnum,
        ParameterReferentialEnum,
        ParamReferentialProductViewModelProps,
        ReferentialProductViewModel
      >
        data={referentialProductList}
        path="products"
      ></ReferentialTable>
    </>
  );
};
