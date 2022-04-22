import {
  AuthenticationDetails,
  CognitoUser,
  CognitoUserAttribute,
  CognitoUserPool,
  ICognitoUserData,
  ICognitoUserPoolData,
} from "amazon-cognito-identity-js";
import { poolData } from "./config/congitoConfig";
import { CognitoError } from "./errors/CognitoError";
import { NoUserPoolError } from "./errors/NoUserPoolError";
import { CognitoErrorTypes } from "./types/CognitoTypes";

interface ICognitoService {
  signUp(
    username: string,
    password: string,
    userAttributes: CognitoUserAttribute[],
    validationData: CognitoUserAttribute[]
  ): Promise<any>;
  confirmSignUp(username: string, code: string): Promise<any>;
  signIn(username: string, password: string): Promise<CognitoUser | any>;
  signOut(): Promise<any>;
}

class CognitoServiceClass implements ICognitoService {
  private userPool!: CognitoUserPool;
  private pendingSignIn: ReturnType<
    CognitoServiceClass["signInWithPassword"]
  > | null = null;

  constructor() {
    this.configure();
  }

  public getMe() {
    return this.userPool.getCurrentUser();
  }

  public async signOut(): Promise<any> {
    if (!this.userPool) return this.rejectNoUserPool();

    const user = this.userPool.getCurrentUser();
    if (!user) console.debug("no current Cognito user");

    return new Promise((resolve, reject) => {
      user?.signOut(() => {
        resolve(true);
      });
    });
  }

  public signUp(
    username: string,
    password: string,
    userAttributes: CognitoUserAttribute[],
    validationData: CognitoUserAttribute[]
  ): Promise<any> {
    if (!this.userPool) return this.rejectNoUserPool();

    if (!username) this.rejectAuthError(CognitoErrorTypes.EmptyUsername);
    if (!password) this.rejectAuthError(CognitoErrorTypes.EmptyPassword);

    return new Promise((resolve, reject) =>
      this.userPool.signUp(
        username,
        password,
        userAttributes,
        validationData,
        (err, data) => {
          console.log(data);
          err ? reject(err) : resolve(data);
        }
      )
    );
  }

  public confirmSignUp(username: string, code: string): Promise<any> {
    if (!this.userPool) return this.rejectNoUserPool();

    if (!username) return this.rejectAuthError(CognitoErrorTypes.EmptyUsername);

    if (!code) return this.rejectAuthError(CognitoErrorTypes.EmptyCode);

    const user = this.createCognitoUser(username);

    return new Promise((resolve, reject) => {
      user.confirmRegistration(code, true, (err, data) => {
        if (err) {
          reject(err);
        } else {
          console.log(data);
          resolve(data);
        }
      });
    });
  }

  public signIn(
    username: string,
    password: string
  ): Promise<CognitoUser | any> {
    if (!this.userPool) return this.rejectNoUserPool();

    if (!username) return this.rejectAuthError(CognitoErrorTypes.EmptyUsername);
    if (!password) return this.rejectAuthError(CognitoErrorTypes.EmptyPassword);

    const authDetails = new AuthenticationDetails({
      Username: username,
      Password: password,
    });
    return this.signInWithPassword(authDetails);
  }

  private signInWithPassword(
    authDetails: AuthenticationDetails
  ): Promise<CognitoUser | any> {
    if (this.pendingSignIn) {
      throw new Error("Pending sign-in attempt already in progress");
    }

    const user = this.createCognitoUser(authDetails.getUsername());

    this.pendingSignIn = new Promise((resolve, reject) => {
      user.authenticateUser(authDetails, {
        onSuccess: (value) => {
          this.pendingSignIn = null;
          console.log(value);
          resolve(value);
        },
        onFailure: (error) => {
          this.pendingSignIn = null;
          reject(error);
        },
      });
    });

    return this.pendingSignIn;
  }

  private createCognitoUser = (username: string): CognitoUser => {
    const userData: ICognitoUserData = {
      Username: username,
      Pool: this.userPool,
    };
    return new CognitoUser(userData);
  };

  private configure() {
    this.userPool = new CognitoUserPool(poolData);
  }

  private noUserPoolErrorHandler(
    userPoolData: ICognitoUserPoolData
  ): CognitoErrorTypes {
    return userPoolData?.ClientId || userPoolData?.UserPoolId
      ? CognitoErrorTypes.MissingAuthConfig
      : CognitoErrorTypes.NoConfig;
  }

  private rejectNoUserPool() {
    const type = this.noUserPoolErrorHandler(poolData);
    return Promise.reject(new NoUserPoolError(type));
  }

  private rejectAuthError(type: CognitoErrorTypes) {
    return Promise.reject(new CognitoError(type));
  }
}

export const CognitoService = new CognitoServiceClass();
