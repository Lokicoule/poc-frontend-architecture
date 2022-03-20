import { Stack, TextField, InputAdornment } from "@mui/material";
import {
  ResponsiveLinkButton,
  ResponsiveLinkButtonProps,
} from "../../components/Buttons";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import { SetStateAction } from "react";

type AddAndSearchStackProps = Omit<
  ResponsiveLinkButtonProps,
  "iconComponent"
> & {
  onSearch: (event: { target: { value: SetStateAction<string> } }) => void;
};

export const AddAndSearchStack = ({
  onSearch,
  label,
  to,
}: AddAndSearchStackProps) => {
  return (
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
        label={label}
        to={to}
        iconComponent={<AddIcon></AddIcon>}
      ></ResponsiveLinkButton>
    </Stack>
  );
};
