import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  GetProductQuery,
  useGetProductQuery,
  useRemoveProductMutation,
} from "../../../api/hooks/products.generated";
import { Loader } from "../../../components";
import { ProductViewModel } from "../../../view-models/products";
import { ManageProductLogic } from "./ManageProductLogic";

type ManageProductControllerProps = {
  productId: string | undefined;
};

export const ManageProductController = ({
  productId = "",
}: ManageProductControllerProps) => {
  const navigate = useNavigate();
  const [removeProduct] = useRemoveProductMutation({
    update(cache, { data: removeProductData }) {
      cache.modify({
        fields: {
          getProducts(existingProductsRef, { readField }) {
            return existingProductsRef.filter(
              (ProductRef: any) =>
                removeProductData?.removeProduct.id !==
                readField("id", ProductRef)
            );
          },
        },
      });
    },
  });
  const { data, loading } = useGetProductQuery({
    variables: {
      getProductId: productId,
    },
    onError: () => navigate("/backoffice/products"),
  });

  const mapDtoToViewModel = (
    dataDto: GetProductQuery | undefined
  ): Readonly<ProductViewModel> => {
    const product = dataDto?.getProduct;
    return {
      code: product?.code || "",
      label: product?.label || "",
      id: productId,
    };
  };
  const handleRemove = (id: string) =>
    removeProduct({
      variables: {
        removeProductId: id,
      },
      onCompleted: () => {
        toast.success(`${data?.getProduct?.label} a été supprimé avec succès.`);
        navigate("/backoffice/products");
      },
    });

  if (loading) return <Loader></Loader>;

  return (
    <ManageProductLogic
      defaultValues={mapDtoToViewModel(data)}
      onRemove={handleRemove}
    ></ManageProductLogic>
  );
};
