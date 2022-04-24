import { CognitoUserAttribute } from "amazon-cognito-identity-js";

type AuthUser = {
  email: string;
  password: string;
};

type AuthUserAttributes = Pick<AuthUser, "email">;

export const userAttributesBuilder = ({ email }: AuthUserAttributes) => {
  const attributes: CognitoUserAttribute[] = [];
  if (email)
    attributes.push(new CognitoUserAttribute({ Name: "email", Value: email }));

  return attributes;
};
