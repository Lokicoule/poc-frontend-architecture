export enum CognitoErrorTypes {
  NoConfig = "noConfig",
  MissingAuthConfig = "missingAuthConfig",
  EmptyUsername = "emptyUsername",
  InvalidUsername = "invalidUsername",
  EmptyPassword = "emptyPassword",
  EmptyCode = "emptyCode",
  SignUpError = "signUpError",
  NoMFA = "noMFA",
  InvalidMFA = "invalidMFA",
  EmptyChallengeResponse = "emptyChallengeResponse",
  NoUserSession = "noUserSession",
  Default = "default",
  DeviceConfig = "deviceConfig",
  NetworkError = "networkError",
}

export type CognitoErrorMessages = {
  [key in CognitoErrorTypes]: CognitoErrorMessage;
};

export interface CognitoErrorMessage {
  message: string;
}
