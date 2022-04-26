import { useNavigate } from "react-router-dom";
import { authService } from "../../../core/services/auth/authService";
import { SignInLogic } from "./SignInLogic";
import { UserSignInViewModel } from "./types/UserSignIn";

const defaultValues = {
  email: "",
  password: "",
} as Readonly<UserSignInViewModel>;

export const SignInController = () => {
  const navigate = useNavigate();

  const handleSubmit = (data: UserSignInViewModel) => {
    const { email, password } = data;
    return authService.signIn(email, password);
  };

  return (
    <SignInLogic
      defaultValues={defaultValues}
      onSubmit={handleSubmit}
    ></SignInLogic>
  );
};
