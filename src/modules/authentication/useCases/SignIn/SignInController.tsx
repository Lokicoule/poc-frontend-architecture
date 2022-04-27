import { authService } from "../../services/authService";
import { SignInLogic } from "./SignInLogic";
import { UserSignInViewModel } from "./types/UserSignIn";

const defaultValues = {
  email: "",
  password: "",
} as Readonly<UserSignInViewModel>;

export const SignInController = () => {
  const handleSubmit = ({ email, password }: UserSignInViewModel) => {
    return authService.signIn(email, password);
  };

  return (
    <SignInLogic
      defaultValues={defaultValues}
      onSubmit={handleSubmit}
    ></SignInLogic>
  );
};
