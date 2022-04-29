import { Loader } from "../../../../components/Loader/Loader";
import {
  useGetReferentialOrdersQuery,
  GetReferentialOrdersQuery,
} from "../../operations/referentialOrders.generated";
import { ReferentialOrderViewModel } from "../../../../viewModels/referential/orders/ReferentialOrderViewModel";
import { ManageReferentialOrderLogic } from "./ManageReferentialOrderLogic";

export const ManageReferentialOrderController = () => {
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
    <ManageReferentialOrderLogic
      data={mapDtoToViewModel(data)}
    ></ManageReferentialOrderLogic>
  );
};
