import { Grid } from "@mui/material";
import { UseFormReturn } from "react-hook-form";
import { Form } from "../../../components/Form";
import { FormInputText } from "../../../components/Form/FormInput";
import { FeatureLayout } from "../../../layouts";
import { UserSignInViewModel } from "./types/UserSignIn";

export type SignInViewProps = {
  form: UseFormReturn<UserSignInViewModel>;
  onSubmit: (data: UserSignInViewModel) => Promise<void>;
  onReset: () => void;
};

export const SignInView = ({ form, onSubmit, onReset }: SignInViewProps) => {
  const { formState, handleSubmit, control } = form;

  return (
    <FeatureLayout title="Se connecter">
      <Form
        /* errors={errors} */ onSubmit={handleSubmit(onSubmit)}
        onReset={onReset}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <FormInputText
              name="email"
              control={control}
              label="Email"
              error={!!formState?.errors?.email}
              helperText={formState?.errors?.email?.message}
            />
          </Grid>
          <Grid item xs={12}>
            <FormInputText
              name="password"
              control={control}
              label="Mot de passe"
              required
              error={!!formState?.errors?.password}
              helperText={formState?.errors?.password?.message}
            />
          </Grid>
        </Grid>
      </Form>
    </FeatureLayout>
  );
};
