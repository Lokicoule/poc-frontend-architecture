import {
  GetReferentialProductsQuery,
  useGetReferentialProductsQuery,
} from "../../../../api/hooks/referentialProducts.generated";
import { Loader } from "../../../../components";
import { ReferentialProductViewModel } from "../../../../view-models/referential/products/ReferentialProductViewModel";
import { ManageReferentialProductsLogic } from "./ManageReferentialProductsLogic";

export const ManageReferentialProductsController = () => {
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
    <ManageReferentialProductsLogic
      data={mapDtoToViewModel(data)}
    ></ManageReferentialProductsLogic>
  );
};
