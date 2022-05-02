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

export type CreateParameterReferentialProductInput = {
  key: ParameterReferentialEnum;
  value: Scalars['String'];
};

export type CreateProductInput = {
  code?: InputMaybe<Scalars['String']>;
  label: Scalars['String'];
};

export type CreateReferentialProductInput = {
  parameters: Array<CreateParameterReferentialProductInput>;
  useCase: UseCaseReferentialEnum;
};

export type Mutation = {
  __typename?: 'Mutation';
  createProduct: Product;
  createReferentialProduct: ReferentialProduct;
  removeProduct: Product;
  removeProducts: Scalars['Boolean'];
  removeReferentialProduct: ReferentialProduct;
  removeReferentialProducts: Scalars['Boolean'];
  updateProduct: Product;
  updateReferentialProduct: ReferentialProduct;
};


export type MutationCreateProductArgs = {
  createProductInput: CreateProductInput;
};


export type MutationCreateReferentialProductArgs = {
  createReferentialProductInput: CreateReferentialProductInput;
};


export type MutationRemoveProductArgs = {
  id: Scalars['String'];
};


export type MutationRemoveProductsArgs = {
  ids: Array<Scalars['String']>;
};


export type MutationRemoveReferentialProductArgs = {
  id: Scalars['String'];
};


export type MutationRemoveReferentialProductsArgs = {
  ids: Array<Scalars['String']>;
};


export type MutationUpdateProductArgs = {
  id: Scalars['String'];
  updateProductInput: UpdateProductInput;
};


export type MutationUpdateReferentialProductArgs = {
  id: Scalars['String'];
  updateReferentialProductInput: UpdateReferentialProductInput;
};

export enum ParameterReferentialEnum {
  Counter = 'COUNTER',
  Prefix = 'PREFIX',
  Suffix = 'SUFFIX'
}

export type ParameterReferentialProduct = {
  __typename?: 'ParameterReferentialProduct';
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  key: ParameterReferentialEnum;
  updatedAt?: Maybe<Scalars['DateTime']>;
  value: Scalars['String'];
};

export type Product = {
  __typename?: 'Product';
  code: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  label: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type Query = {
  __typename?: 'Query';
  _service: _Service;
  getProduct?: Maybe<Product>;
  getProducts?: Maybe<Array<Product>>;
  getReferentialProduct?: Maybe<ReferentialProduct>;
  getReferentialProducts?: Maybe<Array<ReferentialProduct>>;
};


export type QueryGetProductArgs = {
  id: Scalars['String'];
};


export type QueryGetReferentialProductArgs = {
  id: Scalars['String'];
};

export type ReferentialProduct = {
  __typename?: 'ReferentialProduct';
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  parameters?: Maybe<Array<ParameterReferentialProduct>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  useCase: UseCaseReferentialEnum;
};


export type ReferentialProductParametersArgs = {
  populate: Scalars['Boolean'];
};

export type UpdateParameterReferentialProductInput = {
  key?: InputMaybe<ParameterReferentialEnum>;
  value?: InputMaybe<Scalars['String']>;
};

export type UpdateProductInput = {
  code?: InputMaybe<Scalars['String']>;
  label?: InputMaybe<Scalars['String']>;
};

export type UpdateReferentialProductInput = {
  parameters: Array<UpdateParameterReferentialProductInput>;
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
