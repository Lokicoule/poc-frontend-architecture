export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
};

export type CreateCustomerInput = {
  address: Scalars['String'];
  city: Scalars['String'];
  code?: InputMaybe<Scalars['String']>;
  naming: Scalars['String'];
  zipCode: Scalars['String'];
};

export type CreateParameterReferentialCustomerInput = {
  key: ParameterReferentialEnum;
  value: Scalars['String'];
};

export type CreateReferentialCustomerInput = {
  parameters: Array<CreateParameterReferentialCustomerInput>;
  useCase: UseCaseReferentialEnum;
};

export type Customer = {
  __typename?: 'Customer';
  address: Scalars['String'];
  city: Scalars['String'];
  code: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  naming: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  zipCode: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createCustomer: Customer;
  createReferentialCustomer: ReferentialCustomer;
  removeCustomer: Customer;
  removeCustomers: Scalars['Boolean'];
  removeReferentialCustomer: ReferentialCustomer;
  removeReferentialCustomers: Scalars['Boolean'];
  updateCustomer: Customer;
  updateReferentialCustomer: ReferentialCustomer;
};


export type MutationCreateCustomerArgs = {
  createCustomerInput: CreateCustomerInput;
};


export type MutationCreateReferentialCustomerArgs = {
  createReferentialCustomerInput: CreateReferentialCustomerInput;
};


export type MutationRemoveCustomerArgs = {
  id: Scalars['String'];
};


export type MutationRemoveCustomersArgs = {
  ids: Array<Scalars['String']>;
};


export type MutationRemoveReferentialCustomerArgs = {
  id: Scalars['String'];
};


export type MutationRemoveReferentialCustomersArgs = {
  ids: Array<Scalars['String']>;
};


export type MutationUpdateCustomerArgs = {
  id: Scalars['String'];
  updateCustomerInput: UpdateCustomerInput;
};


export type MutationUpdateReferentialCustomerArgs = {
  id: Scalars['String'];
  updateReferentialCustomerInput: UpdateReferentialCustomerInput;
};

export type ParameterReferentialCustomer = {
  __typename?: 'ParameterReferentialCustomer';
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  key: ParameterReferentialEnum;
  updatedAt?: Maybe<Scalars['DateTime']>;
  value: Scalars['String'];
};

export enum ParameterReferentialEnum {
  Counter = 'COUNTER',
  Prefix = 'PREFIX',
  Suffix = 'SUFFIX'
}

export type Query = {
  __typename?: 'Query';
  _service: _Service;
  getCustomer?: Maybe<Customer>;
  getCustomers?: Maybe<Array<Customer>>;
  getReferentialCustomer?: Maybe<ReferentialCustomer>;
  getReferentialCustomers?: Maybe<Array<ReferentialCustomer>>;
};


export type QueryGetCustomerArgs = {
  id: Scalars['String'];
};


export type QueryGetReferentialCustomerArgs = {
  id: Scalars['String'];
};

export type ReferentialCustomer = {
  __typename?: 'ReferentialCustomer';
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  parameters?: Maybe<Array<ParameterReferentialCustomer>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  useCase: UseCaseReferentialEnum;
};


export type ReferentialCustomerParametersArgs = {
  populate: Scalars['Boolean'];
};

export type UpdateCustomerInput = {
  address?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  code?: InputMaybe<Scalars['String']>;
  naming?: InputMaybe<Scalars['String']>;
  zipCode?: InputMaybe<Scalars['String']>;
};

export type UpdateParameterReferentialCustomerInput = {
  key?: InputMaybe<ParameterReferentialEnum>;
  value?: InputMaybe<Scalars['String']>;
};

export type UpdateReferentialCustomerInput = {
  parameters: Array<UpdateParameterReferentialCustomerInput>;
  useCase: UseCaseReferentialEnum;
};

export enum UseCaseReferentialEnum {
  CodeGenerator = 'CODE_GENERATOR'
}

export type _Service = {
  __typename?: '_Service';
  /** The sdl representing the federated service capabilities. Includes federation directives, removes federation types, and includes rest of full schema after schema directives have been applied */
  sdl?: Maybe<Scalars['String']>;
};
