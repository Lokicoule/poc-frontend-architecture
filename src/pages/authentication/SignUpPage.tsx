import { Page } from "../../components/Page";
import { SignUp } from "../../features/authentication/SignUp";

export const SignUpPage = () => {
  return (
    <Page title="Enregistrement page" maxWidth="sm">
      <SignUp></SignUp>
    </Page>
  );
};
