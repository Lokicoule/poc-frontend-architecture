import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { SignInView } from "./SignInView";
import { UserSignInViewModel } from "./types/UserSignIn";

type SignInLogicProps = {
  defaultValues: UserSignInViewModel;
  onSubmit: (data: UserSignInViewModel) => Promise<any>;
};

const schema = yup.object().shape({
  email: yup.string().required("L'adresse email est requise."),
  password: yup.string().required("Le mot de passe est requis."),
});

export const SignInLogic = ({ defaultValues, onSubmit }: SignInLogicProps) => {
  const form = useForm<UserSignInViewModel>({
    defaultValues: defaultValues,
    resolver: yupResolver(schema),
  });

  const handleReset = () => form.reset();
  const handleSubmit = async (data: UserSignInViewModel) => {
    await onSubmit(data);
  };

  return (
    <SignInView
      form={form}
      onSubmit={handleSubmit}
      onReset={handleReset}
    ></SignInView>
  );
};
