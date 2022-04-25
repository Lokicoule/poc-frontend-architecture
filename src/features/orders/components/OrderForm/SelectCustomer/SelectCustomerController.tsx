import {
  GetCustomersQuery,
  useGetCustomersQuery,
} from "../../../../../api/fdo/operations/customers.generated";
import { Loader } from "../../../../../components/Loader/Loader";
import { CustomerViewModel } from "../../../../../viewModels/customers";
import {
  SelectCustomerLogic,
  SelectCustomerLogicProps,
} from "./SelectCustomerLogic";

type SelectCustomerControllerProps = Omit<
  SelectCustomerLogicProps,
  "customers"
>;

export const SelectCustomerController = ({
  control,
  error,
  helperText,
  name,
  defaultValue,
}: SelectCustomerControllerProps) => {
  const { data: customers, loading: loadingCustomers } = useGetCustomersQuery({
    fetchPolicy: "cache-first", //default
    pollInterval: 300000,
  });

  const mapDtoToViewModel = (
    dataDto: GetCustomersQuery | null | undefined
  ): CustomerViewModel[] => {
    return dataDto?.getCustomers?.map(
      (customer) =>
        ({
          id: customer?.id,
          code: customer?.code,
          naming: customer?.naming,
        } as CustomerViewModel)
    ) as CustomerViewModel[];
  };

  if (loadingCustomers) return <Loader></Loader>;
  return (
    <SelectCustomerLogic
      customers={mapDtoToViewModel(customers)}
      control={control}
      error={error}
      helperText={helperText}
      defaultValue={defaultValue}
      name={name}
    ></SelectCustomerLogic>
  );
};
