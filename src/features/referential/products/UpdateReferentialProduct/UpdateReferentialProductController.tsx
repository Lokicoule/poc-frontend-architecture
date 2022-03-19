import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  GetReferentialProductQuery,
  useGetReferentialProductQuery,
  useUpdateReferentialProductMutation,
} from "../../../../api/hooks/referentialProducts.generated";
import { UpdateReferentialProductInput } from "../../../../api/types/types.generated";
import { Loader } from "../../../../components";
import { ReferentialProductViewModel } from "../../../../view-models/referential/products/ReferentialProductViewModel";
import { UpdateReferentialProductLogic } from "./UpdateReferentialProductLogic";

type UpdateReferentialProductControllerProps = {
  referentialProductId: string;
};

export const UpdateReferentialProductController = ({
  referentialProductId,
}: UpdateReferentialProductControllerProps) => {
  const navigate = useNavigate();
  const { data, loading } = useGetReferentialProductQuery({
    variables: {
      getReferentialProductId: referentialProductId,
      populate: true,
    },
  });

  const [updateReferentialProduct, { error }] =
    useUpdateReferentialProductMutation({
      refetchQueries: ["GetReferentialProducts"],
    });

  const mapViewModelToDto = (
    dataVM: ReferentialProductViewModel
  ): UpdateReferentialProductInput => {
    return {
      useCase: dataVM.useCase,
      parameters: dataVM.parameters.map((param) => ({
        key: param.key,
        value: param.value,
      })),
    };
  };

  const mapDtoToViewModel = (
    dataDto: GetReferentialProductQuery | undefined
  ): ReferentialProductViewModel => {
    const referentialProduct = dataDto?.getReferentialProduct;
    return {
      id: referentialProduct?.id,
      useCase: referentialProduct?.useCase,
      parameters: referentialProduct?.parameters?.map((refC) => ({
        id: refC.id,
        key: refC.key,
        value: refC.value,
      })),
    } as ReferentialProductViewModel;
  };

  const handleSubmit = (dataVM: ReferentialProductViewModel) => {
    return updateReferentialProduct({
      variables: {
        updateReferentialProductId: referentialProductId,
        updateReferentialProductInput: mapViewModelToDto(dataVM),
      },
      onCompleted: ({ updateReferentialProduct }) => {
        toast.success(
          `${updateReferentialProduct.useCase} a été modifié(e) avec succès.`
        );
        navigate(`/backoffice/referential/products`);
      },
      onError: () =>
        toast.error(
          `La modification du référentiel produit ${data?.getReferentialProduct?.useCase} a échouée.`
        ),
    });
  };

  if (loading) return <Loader></Loader>;
  return (
    <UpdateReferentialProductLogic
      defaultValues={mapDtoToViewModel(data)}
      onSubmit={handleSubmit}
      errors={error?.graphQLErrors}
    ></UpdateReferentialProductLogic>
  );
};
