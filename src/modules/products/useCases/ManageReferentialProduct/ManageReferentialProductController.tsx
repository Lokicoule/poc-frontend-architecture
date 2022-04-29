import { Loader } from "../../../../components/Loader/Loader";
import {
  useGetReferentialProductsQuery,
  GetReferentialProductsQuery,
} from "../../operations/referentialProducts.generated";
import { ReferentialProductViewModel } from "../../../../viewModels/referential/products/ReferentialProductViewModel";
import { ManageReferentialProductLogic } from "./ManageReferentialProductLogic";

export const ManageReferentialProductController = () => {
  const { data, loading } = useGetReferentialProductsQuery({
    fetchPolicy: "cache-first", //default
    pollInterval: 300000,
    variables: {
      populate: true,
    },
  });

  const mapDtoToViewModel = (
    dataDto: GetReferentialProductsQuery | null | undefined
  ): ReferentialProductViewModel[] => {
    return dataDto?.getReferentialProducts?.map(
      (item) =>
        ({
          id: item.id,
          useCase: item.useCase,
          parameters: item.parameters || [],
        } as ReferentialProductViewModel)
    ) as ReferentialProductViewModel[];
  };

  if (loading) return <Loader></Loader>;
  return (
    <ManageReferentialProductLogic
      data={mapDtoToViewModel(data)}
    ></ManageReferentialProductLogic>
  );
};
