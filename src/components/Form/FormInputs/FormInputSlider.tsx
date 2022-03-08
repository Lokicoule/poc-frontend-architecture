import { Slider } from "@mui/material";
import { useEffect, useState } from "react";
import { Controller } from "react-hook-form";
import { FormInputProps } from "./FormInputProps";

interface Props
  extends Required<Omit<FormInputProps, "options" | "sx">>,
    Partial<Pick<FormInputProps, "sx">> {}

export const FormInputSlider = ({
  name,
  control,
  setValue,
  label,
  sx = {},
}: Props) => {
  const [sliderValue, setSliderValue] = useState(0);

  useEffect(() => {
    if (sliderValue) setValue(name, sliderValue);
  }, [name, sliderValue]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setSliderValue(newValue as number);
  };

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState, formState }) => (
        <Slider sx={{ ...sx }} value={sliderValue} onChange={handleChange} />
      )}
    />
  );
};
