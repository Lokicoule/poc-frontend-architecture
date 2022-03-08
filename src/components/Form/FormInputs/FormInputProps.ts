import { SxProps, Theme } from "@mui/material";
import { Control } from "react-hook-form";

interface Option {
  key: string;
  value: string;
}

export interface FormInputProps {
  name: string;
  label: string;
  control: Control<any, any>;
  setValue?: Function;
  options?: Option[];
  sx?: SxProps<Theme> | undefined;
}
