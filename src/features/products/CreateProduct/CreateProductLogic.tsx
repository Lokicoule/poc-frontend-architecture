import { FetchResult } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { CreateProductMutation } from "../../../api/hooks/products.generated";
import { CreateProductViewModel } from "../../../view-models/domain/products";
import { CreateProductView, CreateProductViewProps } from "./CreateProductView";

type CreateProductLogicProps = Pick<CreateProductViewProps, "errors"> & {
  defaultValues: CreateProductViewModel;
  onSubmit: (
    data: CreateProductViewModel
  ) => Promise<
    FetchResult<CreateProductMutation, Record<string, any>, Record<string, any>>
  >;
};

const schema = yup.object().shape({
  label: yup.string().required("Le nom du produit est requis."),
});

export const CreateProductLogic = ({
  defaultValues,
  onSubmit,
  errors,
}: CreateProductLogicProps) => {
  const form = useForm<CreateProductViewModel>({
    defaultValues: defaultValues,
    resolver: yupResolver(schema),
  });

  const handleReset = () => form.reset();
  const handleSubmit = async (data: CreateProductViewModel) => {
    await onSubmit(data);
  };

  return (
    <CreateProductView
      form={form}
      onSubmit={handleSubmit}
      onReset={handleReset}
      errors={errors}
    ></CreateProductView>
  );
};
