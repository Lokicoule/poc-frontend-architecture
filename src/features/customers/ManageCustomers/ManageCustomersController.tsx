import { Loader } from "../../../components";
import {
  GetCustomersQuery,
  useGetCustomersQuery,
  useRemoveCustomersMutation,
} from "../../../api/hooks/customers.generated";
import { ManageCustomersLogic } from "./ManageCustomersLogic";
import { CustomerViewModel } from "../../../view-models/domain/customers/CustomerViewModel";

export const ManageCustomersController = () => {
  const { data, loading } = useGetCustomersQuery({
    fetchPolicy: "cache-and-network",
    pollInterval: 300000,
  });

  const [removeCustomers] = useRemoveCustomersMutation({
    refetchQueries: ["GetCustomers"],
  });

  const handleRemove = (ids: string[]) => {
    return removeCustomers({
      variables: {
        ids,
      },
    });
  };

  const mapDtoToViewModel = (
    dataDto: GetCustomersQuery | null | undefined
  ): CustomerViewModel[] => {
    return dataDto?.getCustomers?.map(
      (customer) =>
        ({
          id: customer?.id,
          code: customer?.code,
          naming: customer?.naming,
          address: customer?.address,
          city: customer?.city,
          zipCode: customer?.zipCode,
        } as CustomerViewModel)
    ) as CustomerViewModel[];
  };

  if (loading) return <Loader></Loader>;
  return (
    <ManageCustomersLogic
      data={mapDtoToViewModel(data)}
      onRemove={handleRemove}
    ></ManageCustomersLogic>
  );
};
