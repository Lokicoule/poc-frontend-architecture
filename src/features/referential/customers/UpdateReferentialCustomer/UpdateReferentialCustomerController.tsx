import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  GetReferentialCustomerQuery,
  useGetReferentialCustomerQuery,
  useUpdateReferentialCustomerMutation,
} from "../../../../api/hooks/referentialCustomer.generated";
import { UpdateReferentialCustomerInput } from "../../../../api/types/types.generated";
import { Loader } from "../../../../components";
import { ReferentialCustomerViewModel } from "../../../../view-models/referential/customers/ReferentialCustomerViewModel";
import { UpdateReferentialCustomerLogic } from "./UpdateReferentialCustomerLogic";

type UpdateReferentialCustomerControllerProps = {
  referentialCustomerId: string;
};

export const UpdateReferentialCustomerController = ({
  referentialCustomerId,
}: UpdateReferentialCustomerControllerProps) => {
  const navigate = useNavigate();
  const { data, loading } = useGetReferentialCustomerQuery({
    variables: {
      getReferentialCustomerId: referentialCustomerId,
      populate: true,
    },
  });

  const [updateReferentialCustomer, { error }] =
    useUpdateReferentialCustomerMutation({
      refetchQueries: ["GetReferentialCustomers"],
    });

  const mapViewModelToDto = (
    dataVM: ReferentialCustomerViewModel
  ): UpdateReferentialCustomerInput => {
    return {
      useCase: dataVM.useCase,
      parameters: dataVM.parameters.map((param) => ({
        key: param.key,
        value: param.value,
      })),
    };
  };

  const mapDtoToViewModel = (
    dataDto: GetReferentialCustomerQuery | undefined
  ): ReferentialCustomerViewModel => {
    const referentialCustomer = dataDto?.getReferentialCustomer;
    return {
      id: referentialCustomer?.id,
      useCase: referentialCustomer?.useCase,
      parameters: referentialCustomer?.parameters?.map((refC) => ({
        id: refC.id,
        key: refC.key,
        value: refC.value,
      })),
    } as ReferentialCustomerViewModel;
  };

  const handleSubmit = (dataVM: ReferentialCustomerViewModel) => {
    return updateReferentialCustomer({
      variables: {
        updateReferentialCustomerId: referentialCustomerId,
        updateReferentialCustomerInput: mapViewModelToDto(dataVM),
      },
      onCompleted: ({ updateReferentialCustomer }) => {
        toast.success(
          `${updateReferentialCustomer.useCase} a été modifié(e) avec succès.`
        );
        navigate(`/backoffice/referential/customers`);
      },
      onError: () =>
        toast.error(
          `La modification du référentiel client ${data?.getReferentialCustomer?.useCase} a échouée.`
        ),
    });
  };

  if (loading) return <Loader></Loader>;
  return (
    <UpdateReferentialCustomerLogic
      defaultValues={mapDtoToViewModel(data)}
      onSubmit={handleSubmit}
      errors={error?.graphQLErrors}
    ></UpdateReferentialCustomerLogic>
  );
};
