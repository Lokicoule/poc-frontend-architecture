import { FetchResult } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { isEqual } from "lodash";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { UpdateProductMutation } from "../../../api/hooks/products.generated";
import { UpdateProductViewModel } from "../../../view-models/domain/products";
import { UpdateProductView, UpdateProductViewProps } from "./UpdateProductView";

type UpdateProductLogicProps = Pick<UpdateProductViewProps, "errors"> & {
  defaultValues: UpdateProductViewModel;
  onSubmit: (
    data: UpdateProductViewModel
  ) => Promise<
    FetchResult<UpdateProductMutation, Record<string, any>, Record<string, any>>
  >;
};

const postalCodeRule = new RegExp(/^(?:0[1-9]|[1-8]\d|9[0-8])\d{3}$/);

const schema = yup.object().shape({
  code: yup
    .string()
    .required("Le code produit est requis.")
    .min(5, "Le code produit doit contenir au moins 5 caractères."),
  label: yup.string().required("Le label produit est requis."),
});

export const UpdateProductLogic = ({
  defaultValues,
  onSubmit,
  errors,
}: UpdateProductLogicProps) => {
  const form = useForm<UpdateProductViewModel>({
    defaultValues: defaultValues,
    resolver: yupResolver(schema),
  });

  const handleSubmit = async (data: UpdateProductViewModel) => {
    if (!isEqual(defaultValues, data)) await onSubmit(data);
  };

  const handleReset = () => form.reset();

  return (
    <UpdateProductView
      form={form}
      onSubmit={handleSubmit}
      onReset={handleReset}
      errors={errors}
    ></UpdateProductView>
  );
};
