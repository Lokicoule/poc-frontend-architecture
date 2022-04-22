import { CognitoErrorStrings } from "../constants/CognitoErrorStrings";
import { CognitoErrorMessages, CognitoErrorTypes } from "../types/CognitoTypes";

export class CognitoError extends Error {
  constructor(type: CognitoErrorTypes) {
    const { message } = cognitoErrorMessages[type];
    super(message);

    this.name = "CognitoError";
  }
}

export const cognitoErrorMessages: CognitoErrorMessages = {
  noConfig: {
    message: CognitoErrorStrings.DEFAULT_MSG,
  },
  missingAuthConfig: {
    message: CognitoErrorStrings.DEFAULT_MSG,
  },
  emptyUsername: {
    message: CognitoErrorStrings.EMPTY_USERNAME,
  },
  invalidUsername: {
    message: CognitoErrorStrings.INVALID_USERNAME,
  },
  emptyPassword: {
    message: CognitoErrorStrings.EMPTY_PASSWORD,
  },
  emptyCode: {
    message: CognitoErrorStrings.EMPTY_CODE,
  },
  signUpError: {
    message: CognitoErrorStrings.SIGN_UP_ERROR,
  },
  noMFA: {
    message: CognitoErrorStrings.NO_MFA,
  },
  invalidMFA: {
    message: CognitoErrorStrings.INVALID_MFA,
  },
  emptyChallengeResponse: {
    message: CognitoErrorStrings.EMPTY_CHALLENGE,
  },
  noUserSession: {
    message: CognitoErrorStrings.NO_USER_SESSION,
  },
  deviceConfig: {
    message: CognitoErrorStrings.DEVICE_CONFIG,
  },
  networkError: {
    message: CognitoErrorStrings.NETWORK_ERROR,
  },
  default: {
    message: CognitoErrorStrings.DEFAULT_MSG,
  },
};
