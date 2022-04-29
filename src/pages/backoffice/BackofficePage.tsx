import { authService } from "../../modules/authentication/services/authService";

export const BackofficePage = (props: any) => {
  const handleSignUp = async () =>
    await authService.signUp("loikfekkai@gmail.com", "testests");
  const handleCode = async () =>
    await authService.confirmSignUp("loikfekkai@gmail.com", "402855");
  const handleSignIn = async () =>
    await authService.signIn("loikfekkai@gmail.com", "testests");
  const handleSignOut = async () => await authService.signOut();
  const handleMe = () => console.log(authService.getMe());

  return (
    <>
      <h1>Backoffice Page</h1>
      <button onClick={handleSignUp}>TEST signup</button>
      <button onClick={handleCode}>TEST code</button>
      <button onClick={handleSignIn}>TEST sign in</button>
      <button onClick={handleSignOut}>TEST sign out</button>
      <button onClick={handleMe}>TEST get me</button>
    </>
  );
};
