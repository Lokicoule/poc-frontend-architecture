import { Page } from "../../components/Page";
import { SignIn } from "../../features/authentication/SignIn";

export const SignInPage = () => {
  return (
    <Page title="Connection page" maxWidth="sm">
      <SignIn></SignIn>
    </Page>
  );
};
