import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { CreateProductViewModel } from "../../../../viewModels/products";
import { useCreateProductMutation } from "../../operations/products.generated";
import { CreateProductLogic } from "./CreateProductLogic";

const defaultValues = {
  code: "",
  label: "",
} as Readonly<CreateProductViewModel>;

export const CreateProductController = () => {
  const navigate = useNavigate();
  const [createProduct, { error }] = useCreateProductMutation({
    update(cache, { data: addedProduct }) {
      cache.modify({
        fields: {
          getProduct(existingProduct, { toReference }) {
            return addedProduct ? toReference(addedProduct) : existingProduct;
          },
          getProducts: (existingItems = [], { toReference }) => {
            return (
              (addedProduct?.createProduct && [
                ...existingItems,
                toReference(addedProduct.createProduct),
              ]) ||
              existingItems
            );
          },
        },
      });
    },
  });

  const mapViewModelToDto = (data: CreateProductViewModel) => ({
    code: data.code,
    label: data.label,
  });

  const handleSubmit = (data: CreateProductViewModel) => {
    return createProduct({
      variables: {
        createProductInput: mapViewModelToDto(data),
      },
      onCompleted: ({ createProduct }) => {
        toast.success(`${createProduct.label} a été ajouté avec succès.`);
        navigate(`/backoffice/products/view/${createProduct.id}`);
      },
      onError: () => toast.error(`L'ajout du produit ${data.label} a échoué.`),
    });
  };

  return (
    <CreateProductLogic
      defaultValues={defaultValues}
      onSubmit={handleSubmit}
      errors={error?.graphQLErrors}
    ></CreateProductLogic>
  );
};
