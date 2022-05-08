import { FetchResult } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as yup from "yup";
import { CreateProductViewModelProps } from "../../domain/products.model";
import { productsNavigationHelper } from "../../helpers/products-navigation.helper";
import { CreateProductMutation } from "../../operations/products.generated";
import { CreateProductView, CreateProductViewProps } from "./CreateProductView";

type CreateProductLogicProps = Pick<CreateProductViewProps, "errors"> & {
  defaultValues: CreateProductViewModelProps;
  onSubmit: (
    data: CreateProductViewModelProps
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

  const form = useForm<CreateProductViewModelProps>({
    defaultValues: defaultValues,
    resolver: yupResolver(schema),
  });

  const handleReset = () => form.reset();
  const handleSubmit = async (data: CreateProductViewModelProps) => {
    await onSubmit(data)
      .then((result) => {
        const { id, label } = result.data?.createProduct ?? {
          id: undefined,
          label: "",
        };
        if (id) {
          toast.success(`${label} a été ajouté(e) avec succès.`);
          navigate(productsNavigationHelper.view(id));
        } else {
          toast.warn(`Le produit retourné par le serveur n'est pas valide.`);
        }
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
