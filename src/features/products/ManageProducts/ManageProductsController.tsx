import { toast } from "react-toastify";
import {
  GetProductsQuery,
  useGetProductsQuery,
  useRemoveProductsMutation,
} from "../../../api/fdo/operations/products.generated";
import { Loader } from "../../../components/Loader/Loader";
import { ProductViewModel } from "../../../viewModels/products";
import { ManageProductsLogic } from "./ManageProductsLogic";

export const ManageProductsController = () => {
  const { data, loading } = useGetProductsQuery({
    fetchPolicy: "cache-first", //default
    pollInterval: 300000,
  });
  const [removeProducts] = useRemoveProductsMutation({
    refetchQueries: ["GetProducts"],
  });

  const handleRemove = (ids: string[]) => {
    return removeProducts({
      variables: {
        ids,
      },
      onCompleted: () => {
        toast.success(
          `Les clients sélectionné(e)s ont étés supprimé(e)s avec succès.`
        );
      },
      onError: () =>
        toast.error(`La suppression des clients sélectionné(e)s a échouée.`),
    });
  };

  const mapDtoToViewModel = (
    dataDto: GetProductsQuery | null | undefined
  ): ProductViewModel[] => {
    return dataDto?.getProducts?.map(
      (product) =>
        ({
          id: product?.id,
          code: product?.code,
          label: product?.label,
        } as ProductViewModel)
    ) as ProductViewModel[];
  };

  if (loading) return <Loader></Loader>;
  return (
    <ManageProductsLogic
      data={mapDtoToViewModel(data)}
      onRemove={handleRemove}
    ></ManageProductsLogic>
  );
};
