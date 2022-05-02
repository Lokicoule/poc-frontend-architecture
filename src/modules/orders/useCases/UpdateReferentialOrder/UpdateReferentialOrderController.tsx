import { Loader } from "../../../../components/Loader/Loader";
import { ReferentialOrderViewModel } from "../../domain/referential-order.model";
import { useGetReferentialOrderFacade } from "../../hooks/useGetReferentialOrderFacade";
import { useUpdateReferentialOrderFacade } from "../../hooks/useUpdateReferentialOrderFacade";
import { UpdateReferentialOrderLogic } from "./UpdateReferentialOrderLogic";

type UpdateReferentialOrderControllerProps = {
  referentialOrderId: string;
};

export const UpdateReferentialOrderController = ({
  referentialOrderId,
}: UpdateReferentialOrderControllerProps) => {
  const { getReferentialOrder } =
    useGetReferentialOrderFacade(referentialOrderId);
  const { updateReferentialOrder } = useUpdateReferentialOrderFacade();

  const handleSubmit = (data: ReferentialOrderViewModel) =>
    updateReferentialOrder.onUpdate(data);

  if (getReferentialOrder.loading) return <Loader></Loader>;
  return (
    <UpdateReferentialOrderLogic
      defaultValues={getReferentialOrder.data}
      onSubmit={handleSubmit}
      errors={updateReferentialOrder.error?.graphQLErrors}
    ></UpdateReferentialOrderLogic>
  );
};
