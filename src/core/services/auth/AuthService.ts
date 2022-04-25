import { cognitoClient } from "../../providers/cognito/cognitoClient";
import { BroadcastService } from "../BroadcastService";
import { authConfig } from "./constants/authConfig";
import { userAttributesBuilder } from "./helpers/userAttributesBuilder";
import { userAttributesValidationBuilder } from "./helpers/userAttributesValidationBuilder";

export interface BroadcastMessage {
  type: string;
  payload: boolean;
}

class AuthService {
  private channel: BroadcastService<BroadcastMessage>;

  constructor() {
    this.channel = new BroadcastService(authConfig.AUTH_BROADCAST_TYPE);
  }

  async signUp(email: string, password: string) {
    await cognitoClient.signUp(
      email,
      password,
      userAttributesBuilder({ email }),
      userAttributesValidationBuilder()
    );
  }

  async confirmSignUp(email: string, code: string) {
    await cognitoClient.confirmSignUp(email, code);
  }

  async resendConfirmationCode(email: string) {
    try {
      await cognitoClient.resendSignUp(email);
    } catch (err) {
      console.log("error resending code: ", err);
    }
  }

  async forgotPassword(email: string) {
    try {
      const t = await cognitoClient.forgotPassword(email);
      console.log(t);
    } catch (error) {
      console.log(error);
    }
  }

  async forgotPasswordSubmit(email: string, code: string, password: string) {
    try {
      await cognitoClient.forgotPasswordSubmit(email, code, password);
    } catch (error) {
      console.log("error submit forgot password code: ", error);
    }
  }

  async signIn(email: string, password: string) {
    if (this.getMe()) {
      throw new Error("You are already logged in.");
    }
    await cognitoClient.signIn(email, password);
    console.log("next");
    this.channel.dispatch({
      type: authConfig.AUTH_BROADCAST_TYPE,
      payload: true,
    });
  }

  async signOut() {
    if (!this.getMe()) {
      throw new Error("You are already logged out.");
    }
    console.log("signOut");
    await cognitoClient.signOut();
    this.channel.dispatch({
      type: authConfig.AUTH_BROADCAST_TYPE,
      payload: false,
    });
  }

  getMe() {
    return cognitoClient.getMe();
  }

  messagesOfType(type: string) {
    return this.channel.messagesOfType(type);
  }
}

export const authService = new AuthService();
