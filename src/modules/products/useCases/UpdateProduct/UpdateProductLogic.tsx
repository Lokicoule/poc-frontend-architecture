import { FetchResult } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as yup from "yup";
import {
  ProductViewModel,
  UpdateProductViewModelProps,
} from "../../domain/products.model";
import { productsNavigationHelper } from "../../helpers/products-navigation.helper";
import { UpdateProductMutation } from "../../operations/products.generated";
import { UpdateProductView, UpdateProductViewProps } from "./UpdateProductView";

type UpdateProductLogicProps = Pick<UpdateProductViewProps, "errors"> & {
  defaultValues: ProductViewModel;
  onSubmit: (
    data: UpdateProductViewModelProps
  ) => Promise<
    FetchResult<UpdateProductMutation, Record<string, any>, Record<string, any>>
  >;
};

const schema = yup.object().shape({
  code: yup
    .string()
    .required("Le code produit est requis.")
    .min(3, "Le code produit doit contenir au moins 3 caractères."),
  label: yup.string().required("Le label produit est requis."),
});

const areEqual = (
  defaultValues: ProductViewModel,
  updatedProduct: UpdateProductViewModelProps
) => {
  const product = ProductViewModel.create({
    id: defaultValues.id,
    ...updatedProduct,
  });
  return defaultValues.equals(product);
};

export const UpdateProductLogic = ({
  defaultValues,
  onSubmit,
  errors,
}: UpdateProductLogicProps) => {
  const navigate = useNavigate();

  const form = useForm<UpdateProductViewModelProps>({
    defaultValues: defaultValues.props,
    resolver: yupResolver(schema),
  });

  const handleSubmit = async (updatedProduct: UpdateProductViewModelProps) => {
    if (areEqual(defaultValues, updatedProduct)) {
      toast.info("Nothing to save");
      return;
    }
    await onSubmit(updatedProduct)
      .then((result) => {
        const { id, label } = result.data?.updateProduct ?? {
          id: undefined,
          label: "",
        };
        if (id) {
          toast.success(`${label} a été modifié(e) avec succès.`);
          navigate(productsNavigationHelper.view(id));
        } else {
          toast.warn(`Le produit retourné par le serveur n'est pas valide.`);
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error(
          `La modification du produit ${updatedProduct.label} a échouée.`
        );
      });
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
