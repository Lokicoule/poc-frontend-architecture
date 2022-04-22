import { CognitoUser, CognitoUserAttribute } from "amazon-cognito-identity-js";
import { CognitoService } from "../aws/cognito/CognitoService";

interface IAuthService {
  /*   signUp(email: string, password: string):
   */
}

type User = {
  email: string;
  password: string;
};

type UserAttributes = Pick<User, "email">;

const userAttributesBuilder = ({ email }: UserAttributes) => {
  const attributes: CognitoUserAttribute[] = [];
  if (email)
    attributes.push(new CognitoUserAttribute({ Name: "email", Value: email }));

  return attributes;
};

const userAttributesValidationBuilder = (): CognitoUserAttribute[] => {
  const validationData: CognitoUserAttribute[] = [];
  return validationData;
};

class AuthServiceClass implements IAuthService {
  private me: CognitoUser | null;

  constructor() {
    this.me = this.getMe();
  }

  async signUp(email: string, password: string) {
    if (this.me) {
      throw new Error("You are already logged in.");
    }
    await CognitoService.signUp(
      email,
      password,
      userAttributesBuilder({ email }),
      userAttributesValidationBuilder()
    );
  }

  async confirmSignUp(email: string, code: string) {
    if (this.me) {
      throw new Error("You are already logged in.");
    }
    await CognitoService.confirmSignUp(email, code);
  }

  async signIn(email: string, password: string) {
    if (this.me) {
      throw new Error("You are already logged in.");
    }
    await CognitoService.signIn(email, password);
    this.me = this.getMe();
  }

  async signOut() {
    if (!this.me) {
      throw new Error("You are already logged out.");
    }
    console.log("signOut");
    await CognitoService.signOut();
    this.me = null;
  }

  getMe() {
    return CognitoService.getMe();
  }
}

export const AuthService = new AuthServiceClass();
