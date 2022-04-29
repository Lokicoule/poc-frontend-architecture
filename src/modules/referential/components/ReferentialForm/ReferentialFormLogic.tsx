import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { ReferentialProductViewModel } from "../../../../viewModels/referential/products/ReferentialProductViewModel";
import {
  ReferentialFormView,
  ReferentialFormViewProps,
} from "./ReferentialFormView";

interface ParameterReferentialEnum {
  Counter: any;
}

export type ReferentialFormLogicProps = Pick<
  ReferentialFormViewProps,
  "errors" | "onSubmit" | "parameterReferentialEnum"
> & {
  defaultValues: ReferentialProductViewModel;
  schema: yup.ObjectSchema<any>;
};

export const referentialSchema = <T extends ParameterReferentialEnum>(
  parameterReferentialEnum: T
) =>
  yup.object().shape({
    useCase: yup.string().required("Le cas d'usage est requis."),
    parameters: yup
      .array()
      .of(
        yup.object().shape({
          key: yup.string().required("Une clé doit être sélectionnée."),
          value: yup
            .string()
            .required("Une valeur doit être renseignée.")
            .when("key", {
              is: (keyValue: string) =>
                keyValue === parameterReferentialEnum.Counter,
              then: yup
                .string()
                .matches(/^[0-9]+$/, "Doit contenir des chiffres"),
            }),
        })
      )
      .test("unique_key", "La clé doit être unique.", (parameters, ctx) => {
        const { createError } = ctx;
        const stack = new Set();
        const errors: yup.ValidationError[] = [];
        //TODO to improve with reduce
        parameters?.forEach((param, idx) => {
          if (stack.has(param["key"]))
            errors.push(
              new yup.ValidationError(
                `La clé ${param["key"]} est déjà utilisée.`,
                parameters[idx].key,
                `parameters[${idx}].key`
              )
            );
          else stack.add(param["key"]);
        });
        if (errors && errors.length > 0) {
          return createError({
            message: () => errors,
          });
        }
        return true;
      }),
  });

export const ReferentialFormLogic = ({
  defaultValues,
  parameterReferentialEnum,
  onSubmit,
  errors,
  schema,
}: ReferentialFormLogicProps) => {
  const form = useForm<ReferentialProductViewModel>({
    defaultValues: defaultValues,
    resolver: yupResolver(schema),
  });

  const handleReset = () => form.reset();

  return (
    <ReferentialFormView
      form={form}
      onSubmit={onSubmit}
      onReset={handleReset}
      errors={errors}
      parameterReferentialEnum={parameterReferentialEnum}
    ></ReferentialFormView>
  );
};
