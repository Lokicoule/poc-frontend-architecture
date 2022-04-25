import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  GetReferentialOrderQuery,
  useGetReferentialOrderQuery,
  useUpdateReferentialOrderMutation,
} from "../../../../api/fdo/operations/referentialOrders.generated";
import { UpdateReferentialOrderInput } from "../../../../api/fdo/types/dto-types.generated";
import { Loader } from "../../../../components/Loader/Loader";
import { ReferentialOrderViewModel } from "../../../../viewModels/referential/orders/ReferentialOrderViewModel";
import { UpdateReferentialOrderLogic } from "./UpdateReferentialOrderLogic";

type UpdateReferentialOrderControllerProps = {
  referentialOrderId: string;
};

export const UpdateReferentialOrderController = ({
  referentialOrderId,
}: UpdateReferentialOrderControllerProps) => {
  const navigate = useNavigate();
  const { data, loading } = useGetReferentialOrderQuery({
    variables: {
      getReferentialOrderId: referentialOrderId,
      populate: true,
    },
  });

  const [updateReferentialOrder, { error }] = useUpdateReferentialOrderMutation(
    {
      refetchQueries: ["GetReferentialOrders"],
    }
  );

  const mapViewModelToDto = (
    dataVM: ReferentialOrderViewModel
  ): UpdateReferentialOrderInput => {
    return {
      useCase: dataVM.useCase,
      parameters: dataVM.parameters.map((param) => ({
        key: param.key,
        value: param.value,
      })),
    };
  };

  const mapDtoToViewModel = (
    dataDto: GetReferentialOrderQuery | undefined
  ): ReferentialOrderViewModel => {
    const referentialOrder = dataDto?.getReferentialOrder;
    return {
      id: referentialOrder?.id,
      useCase: referentialOrder?.useCase,
      parameters: referentialOrder?.parameters?.map((refC) => ({
        id: refC.id,
        key: refC.key,
        value: refC.value,
      })),
    } as ReferentialOrderViewModel;
  };

  const handleSubmit = (dataVM: ReferentialOrderViewModel) => {
    return updateReferentialOrder({
      variables: {
        updateReferentialOrderId: referentialOrderId,
        updateReferentialOrderInput: mapViewModelToDto(dataVM),
      },
      onCompleted: ({ updateReferentialOrder }) => {
        toast.success(
          `${updateReferentialOrder.useCase} a été modifié(e) avec succès.`
        );
        navigate(`/backoffice/referential/orders`);
      },
      onError: () =>
        toast.error(
          `La modification du référentiel commande ${data?.getReferentialOrder?.useCase} a échouée.`
        ),
    });
  };

  if (loading) return <Loader></Loader>;
  return (
    <UpdateReferentialOrderLogic
      defaultValues={mapDtoToViewModel(data)}
      onSubmit={handleSubmit}
      errors={error?.graphQLErrors}
    ></UpdateReferentialOrderLogic>
  );
};
