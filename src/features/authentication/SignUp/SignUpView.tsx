import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import {
  Avatar,
  Box,
  Button,
  Grid,
  Link,
  Typography,
  useTheme,
} from "@mui/material";
import { UseFormReturn } from "react-hook-form";
import { FormInputText } from "../../../components/Form/FormInput";
import { LinkRouter } from "../../../components/LinkRouter";
import { UserSignUpViewModel } from "./types/UserSignUp";

export type SignUpViewProps = {
  form: UseFormReturn<UserSignUpViewModel>;
  onSubmit: (data: UserSignUpViewModel) => Promise<void>;
  error: string;
};

export const SignUpView = ({ form, onSubmit, error }: SignUpViewProps) => {
  const theme = useTheme();
  const { formState, handleSubmit, control } = form;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Enregistrement
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        sx={{ mt: 3 }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <FormInputText
              name="email"
              control={control}
              label="Email"
              required
              fullWidth
              autoComplete="email"
              autoFocus
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
              fullWidth
              type="password"
              autoComplete="current-password"
              error={!!formState?.errors?.password}
              helperText={formState?.errors?.password?.message}
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          S'enregistrer
        </Button>
        <Typography color={theme.palette.error.main}>{error ?? ""}</Typography>
        <Grid container justifyContent="flex-end">
          <Grid item>
            <LinkRouter to="/auth/sign-in" variant="body2">
              Already have an account? Sign in
            </LinkRouter>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
