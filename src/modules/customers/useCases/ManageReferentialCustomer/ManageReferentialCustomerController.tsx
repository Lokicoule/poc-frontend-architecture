import { Loader } from "../../../../components/Loader/Loader";
import { ReferentialCustomerViewModel } from "../../../../viewModels/referential/customers/ReferentialCustomerViewModel";
import {
  useGetReferentialCustomersQuery,
  GetReferentialCustomersQuery,
} from "../../operations/referentialCustomers.generated";
import { ManageReferentialCustomerLogic } from "./ManageReferentialCustomerLogic";

export const ManageReferentialCustomerController = () => {
  const { data, loading } = useGetReferentialCustomersQuery({
    fetchPolicy: "cache-first", //default
    pollInterval: 300000,
    variables: {
      populate: true,
    },
  });

  const mapDtoToViewModel = (
    dataDto: GetReferentialCustomersQuery | null | undefined
  ): ReferentialCustomerViewModel[] => {
    return dataDto?.getReferentialCustomers?.map(
      (item) =>
        ({
          id: item.id,
          useCase: item.useCase,
          parameters: item.parameters || [],
        } as ReferentialCustomerViewModel)
    ) as ReferentialCustomerViewModel[];
  };

  if (loading) return <Loader></Loader>;
  return (
    <ManageReferentialCustomerLogic
      data={mapDtoToViewModel(data)}
    ></ManageReferentialCustomerLogic>
  );
};
