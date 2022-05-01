import { Loader } from "../../../../components/Loader/Loader";
import { ReferentialProductViewModel } from "../../domain/referential-product.model";
import { useGetReferentialProductFacade } from "../../hooks/useGetReferentialProductFacade";
import { useUpdateReferentialProductFacade } from "../../hooks/useUpdateReferentialProductFacade";
import { UpdateReferentialProductLogic } from "./UpdateReferentialProductLogic";

type UpdateReferentialProductControllerProps = {
  referentialProductId: string;
};

export const UpdateReferentialProductController = ({
  referentialProductId,
}: UpdateReferentialProductControllerProps) => {
  const { getReferentialProduct } =
    useGetReferentialProductFacade(referentialProductId);
  const { updateReferentialProduct } = useUpdateReferentialProductFacade();

  const handleSubmit = (data: ReferentialProductViewModel) =>
    updateReferentialProduct.onUpdate(referentialProductId, data);

  if (getReferentialProduct.loading) return <Loader></Loader>;
  return (
    <UpdateReferentialProductLogic
      defaultValues={getReferentialProduct.data}
      onSubmit={handleSubmit}
      errors={updateReferentialProduct.error?.graphQLErrors}
    ></UpdateReferentialProductLogic>
  );
};
