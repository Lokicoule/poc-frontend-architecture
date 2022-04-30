import { Loader } from "../../../../components/Loader/Loader";
import { ReferentialCustomerViewModel } from "../../domain/referential-customer.model";
import { useGetReferentialCustomerFacade } from "../../hooks/useGetReferentialCustomerFacade";
import { useUpdateReferentialCustomerFacade } from "../../hooks/useUpdateReferentialCustomerFacade";
import { UpdateReferentialCustomerLogic } from "./UpdateReferentialCustomerLogic";

type UpdateReferentialCustomerControllerProps = {
  referentialCustomerId: string;
};

export const UpdateReferentialCustomerController = ({
  referentialCustomerId,
}: UpdateReferentialCustomerControllerProps) => {
  const { getReferentialCustomer } = useGetReferentialCustomerFacade(
    referentialCustomerId
  );
  const { updateReferentialCustomer } = useUpdateReferentialCustomerFacade();

  const handleSubmit = (data: ReferentialCustomerViewModel) =>
    updateReferentialCustomer.onUpdate(referentialCustomerId, data);

  if (getReferentialCustomer.loading) return <Loader></Loader>;
  return (
    <UpdateReferentialCustomerLogic
      defaultValues={getReferentialCustomer.data}
      onSubmit={handleSubmit}
      errors={updateReferentialCustomer.error?.graphQLErrors}
    ></UpdateReferentialCustomerLogic>
  );
};
