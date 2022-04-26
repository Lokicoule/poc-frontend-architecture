import { authService } from "../../../core/services/auth/authService";
import { SignUpLogic } from "./SignUpLogic";
import { UserSignUpViewModel } from "./types/UserSignUp";

const defaultValues = {
  email: "",
  password: "",
} as Readonly<UserSignUpViewModel>;

export const SignUpController = () => {
  const handleSubmit = ({ email, password }: UserSignUpViewModel) => {
    return authService.signUp(email, password);
  };

  return (
    <SignUpLogic
      defaultValues={defaultValues}
      onSubmit={handleSubmit}
    ></SignUpLogic>
  );
};
