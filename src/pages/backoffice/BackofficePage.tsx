import { AuthService } from "../../core/services/auth/AuthService";

export const BackofficePage = () => {
  const handleSignUp = async () =>
    await AuthService.signUp("loikfekkai@gmail.com", "testests");
  const handleCode = async () =>
    await AuthService.confirmSignUp("loikfekkai@gmail.com", "402855");
  const handleSignIn = async () =>
    await AuthService.signIn("loikfekkai@gmail.com", "testests");
  const handleSignOut = async () => await AuthService.signOut();
  const handleMe = () => console.log(AuthService.getMe());
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
