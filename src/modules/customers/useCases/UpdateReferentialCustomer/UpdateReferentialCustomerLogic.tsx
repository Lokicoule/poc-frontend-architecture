import { FetchResult } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { referentialSchema } from "../../../referential/components/ReferentialForm/ReferentialFormLogic";
import { ReferentialCustomerViewModel } from "../../domain/referential-customer.model";
import { ParameterReferentialEnum } from "../../dtos/customers.dto.generated";
import { UpdateReferentialCustomerMutation } from "../../operations/referential-customers.generated";
import {
  UpdateReferentialCustomerView,
  UpdateReferentialCustomerViewProps,
} from "./UpdateReferentialCustomerView";

type UpdateReferentialCustomerLogicProps = Pick<
  UpdateReferentialCustomerViewProps,
  "errors"
> & {
  defaultValues: ReferentialCustomerViewModel;
  onSubmit: (
    data: ReferentialCustomerViewModel
  ) => Promise<
    FetchResult<
      UpdateReferentialCustomerMutation,
      Record<string, any>,
      Record<string, any>
    >
  >;
};

export const UpdateReferentialCustomerLogic = ({
  defaultValues,
  onSubmit,
  errors,
}: UpdateReferentialCustomerLogicProps) => {
  const navigate = useNavigate();

  const handleSubmit = async (data: ReferentialCustomerViewModel) => {
    if (defaultValues.equals(data)) {
      toast.info("Nothing to save");
      return;
    }
    await onSubmit(data)
      .then((result) => {
        toast.success(
          `${result.data?.updateReferentialCustomer.useCase} a été modifié(e) avec succès.`
        );
        navigate(`/backoffice/referential/customers`);
      })
      .catch((error) =>
        toast.error(
          `La modification du référentiel client ${defaultValues.useCase} a échouée.`
        )
      );
  };

  return (
    <UpdateReferentialCustomerView
      onSubmit={handleSubmit}
      errors={errors}
      defaultValues={defaultValues}
      schema={referentialSchema(ParameterReferentialEnum)}
      parameterReferentialEnum={ParameterReferentialEnum}
    ></UpdateReferentialCustomerView>
  );
};
