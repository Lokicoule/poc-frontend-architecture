import {
  GetProductsQuery,
  useGetProductsQuery,
} from "../../../../../api/fdo/operations/products.generated";
import { Loader } from "../../../../../components/Loader/Loader";
import { ProductViewModel } from "../../../../../viewModels/products";
import {
  SelectProductLogic,
  SelectProductLogicProps,
} from "./SelectProductLogic";

type SelectProductControllerProps = Omit<SelectProductLogicProps, "products">;

export const SelectProductController = ({
  control,
  error,
  helperText,
  name,
  defaultValue,
}: SelectProductControllerProps) => {
  const { data: products, loading: loadingProducts } = useGetProductsQuery({
    fetchPolicy: "cache-first", //default
    pollInterval: 300000,
  });

  const mapDtoToViewModel = (
    dataDto: GetProductsQuery | null | undefined
  ): ProductViewModel[] => {
    return dataDto?.getProducts?.map(
      (product) =>
        ({
          id: product?.id,
          code: product?.code,
        } as ProductViewModel)
    ) as ProductViewModel[];
  };

  if (loadingProducts) return <Loader></Loader>;
  return (
    <SelectProductLogic
      products={mapDtoToViewModel(products)}
      control={control}
      error={error}
      helperText={helperText}
      defaultValue={defaultValue}
      name={name}
    ></SelectProductLogic>
  );
};
