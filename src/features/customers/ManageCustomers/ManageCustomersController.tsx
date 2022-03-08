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
    responseDto: GetCustomersQuery | null | undefined
  ): CustomerViewModel[] => {
    return responseDto?.getCustomers?.map(
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

  /* const handleRemove = (customer: Customer) =>
    removeCustomer({
      variables: {
        removeCustomerId: customer.id,
      },
      update(cache, { data: removeCustomerData }) {
        cache.modify({
          fields: {
            customers(existingCustomersRef, { readField }) {
              return existingCustomersRef.filter(
                (customerRef: any) =>
                  removeCustomerData?.removeCustomer.id !==
                  readField("id", customerRef)
              );
            },
          },
        });
      },
    }); */
  if (loading) return <Loader></Loader>;
  return (
    <ManageCustomersLogic
      data={mapDtoToViewModel(data)}
      onRemove={handleRemove}
    ></ManageCustomersLogic>
  );
};
