import { FetchResult } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as yup from "yup";
import { CreateProductViewModel } from "../../../../viewModels/products";
import { CreateProductMutation } from "../../operations/products.generated";
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
  const navigate = useNavigate();

  const form = useForm<CreateProductViewModel>({
    defaultValues: defaultValues,
    resolver: yupResolver(schema),
  });

  const handleReset = () => form.reset();
  const handleSubmit = async (data: CreateProductViewModel) => {
    await onSubmit(data)
      .then((result) => {
        toast.success(
          `${result.data?.createProduct.label} a été ajouté avec succès.`
        );
        navigate(`/backoffice/products/view/${result.data?.createProduct.id}`);
      })
      .catch((error) =>
        toast.error(`L'ajout du produit ${data.label} a échoué.`)
      );
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
