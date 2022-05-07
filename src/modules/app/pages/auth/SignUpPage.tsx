import { Page } from "../../../../components/Page";
import { SignUp } from "../../../authentication/useCases/SignUp";

export const SignUpPage = () => {
  return (
    <Page title="Enregistrement page" maxWidth="sm">
      <SignUp></SignUp>
    </Page>
  );
};
