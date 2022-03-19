import {
  GetReferentialOrdersQuery,
  useGetReferentialOrdersQuery,
} from "../../../../api/hooks/referentialOrders.generated";
import { Loader } from "../../../../components";
import { ReferentialOrderViewModel } from "../../../../view-models/referential/orders/ReferentialOrderViewModel";
import { ManageReferentialOrdersLogic } from "./ManageReferentialOrdersLogic";

export const ManageReferentialOrdersController = () => {
  const { data, loading } = useGetReferentialOrdersQuery({
    fetchPolicy: "cache-first", //default
    pollInterval: 300000,
    variables: {
      populate: true,
    },
  });

  const mapDtoToViewModel = (
    dataDto: GetReferentialOrdersQuery | null | undefined
  ): ReferentialOrderViewModel[] => {
    return dataDto?.getReferentialOrders?.map(
      (item) =>
        ({
          id: item.id,
          useCase: item.useCase,
          parameters: item.parameters || [],
        } as ReferentialOrderViewModel)
    ) as ReferentialOrderViewModel[];
  };

  if (loading) return <Loader></Loader>;
  return (
    <ManageReferentialOrdersLogic
      data={mapDtoToViewModel(data)}
    ></ManageReferentialOrdersLogic>
  );
};
