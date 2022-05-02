import * as yup from "yup";
import { TypeOfShape, Assign, ObjectShape } from "yup/lib/object";
import { RequiredStringSchema } from "yup/lib/string";
import { AnyObject } from "yup/lib/types";

export const createReferentialValidationSchema = (counterKey: string) =>
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
              is: (keyValue: string) => keyValue === counterKey,
              then: yup
                .string()
                .matches(/^[0-9]+$/, "Doit contenir des chiffres"),
            }),
        })
      )
      .test("unique_key", "La clé doit être unique.", (parameters, ctx) =>
        uniqKeyRule(parameters, ctx)
      ),
  });

const uniqKeyRule = (
  parameters:
    | TypeOfShape<
        Assign<
          ObjectShape,
          {
            key: RequiredStringSchema<string | undefined, AnyObject>;
            value: RequiredStringSchema<string | undefined, AnyObject>;
          }
        >
      >[]
    | undefined,
  ctx: yup.TestContext<AnyObject>
) => {
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
};
