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

export type CreateOrderInput = {
  billingDate?: InputMaybe<Scalars['DateTime']>;
  code?: InputMaybe<Scalars['String']>;
  customer: OrderCustomerInput;
  dueDate?: InputMaybe<Scalars['DateTime']>;
  items?: InputMaybe<Array<OrderItemInput>>;
};

export type CreateParameterReferentialOrderInput = {
  key: ParameterReferentialEnum;
  value: Scalars['String'];
};

export type CreateReferentialOrderInput = {
  parameters: Array<CreateParameterReferentialOrderInput>;
  useCase: UseCaseReferentialEnum;
};

export type Mutation = {
  __typename?: 'Mutation';
  createOrder: Order;
  createReferentialOrder: ReferentialOrder;
  removeOrder: Order;
  removeOrders: Scalars['Boolean'];
  removeReferentialOrder: ReferentialOrder;
  removeReferentialOrders: Scalars['Boolean'];
  updateOrder: Order;
  updateReferentialOrder: ReferentialOrder;
};


export type MutationCreateOrderArgs = {
  createOrderInput: CreateOrderInput;
};


export type MutationCreateReferentialOrderArgs = {
  createReferentialOrderInput: CreateReferentialOrderInput;
};


export type MutationRemoveOrderArgs = {
  id: Scalars['String'];
};


export type MutationRemoveOrdersArgs = {
  ids: Array<Scalars['String']>;
};


export type MutationRemoveReferentialOrderArgs = {
  id: Scalars['String'];
};


export type MutationRemoveReferentialOrdersArgs = {
  ids: Array<Scalars['String']>;
};


export type MutationUpdateOrderArgs = {
  id: Scalars['String'];
  updateOrderInput: UpdateOrderInput;
};


export type MutationUpdateReferentialOrderArgs = {
  updateReferentialOrderInput: UpdateReferentialOrderInput;
};

export type Order = {
  __typename?: 'Order';
  billingDate?: Maybe<Scalars['DateTime']>;
  code: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  customer: OrderCustomer;
  dueDate?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  items?: Maybe<Array<OrderItem>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type OrderCustomer = {
  __typename?: 'OrderCustomer';
  address: Scalars['String'];
  city: Scalars['String'];
  code: Scalars['String'];
  id: Scalars['ID'];
  naming: Scalars['String'];
  zipCode: Scalars['String'];
};

export type OrderCustomerInput = {
  address: Scalars['String'];
  city: Scalars['String'];
  code: Scalars['String'];
  id: Scalars['String'];
  naming: Scalars['String'];
  zipCode: Scalars['String'];
};

export type OrderItem = {
  __typename?: 'OrderItem';
  amount: Scalars['Float'];
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  product?: Maybe<OrderProduct>;
  unitPrice: Scalars['Float'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type OrderItemInput = {
  amount: Scalars['Float'];
  product: OrderProductInput;
  unitPrice: Scalars['Float'];
};

export type OrderProduct = {
  __typename?: 'OrderProduct';
  code: Scalars['String'];
  id: Scalars['ID'];
  label: Scalars['String'];
};

export type OrderProductInput = {
  code: Scalars['String'];
  id: Scalars['String'];
  label: Scalars['String'];
};

export enum ParameterReferentialEnum {
  Counter = 'COUNTER',
  Prefix = 'PREFIX',
  Suffix = 'SUFFIX'
}

export type ParameterReferentialOrder = {
  __typename?: 'ParameterReferentialOrder';
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  key: ParameterReferentialEnum;
  updatedAt?: Maybe<Scalars['DateTime']>;
  value: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  _service: _Service;
  getOrder?: Maybe<Order>;
  getOrders?: Maybe<Array<Order>>;
  getReferentialOrder?: Maybe<ReferentialOrder>;
  getReferentialOrders?: Maybe<Array<ReferentialOrder>>;
};


export type QueryGetOrderArgs = {
  id: Scalars['String'];
};


export type QueryGetReferentialOrderArgs = {
  id: Scalars['String'];
};

export type ReferentialOrder = {
  __typename?: 'ReferentialOrder';
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  parameters?: Maybe<Array<ParameterReferentialOrder>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  useCase: UseCaseReferentialEnum;
};


export type ReferentialOrderParametersArgs = {
  populate: Scalars['Boolean'];
};

export type UpdateOrderInput = {
  billingDate?: InputMaybe<Scalars['DateTime']>;
  code?: InputMaybe<Scalars['String']>;
  customer?: InputMaybe<OrderCustomerInput>;
  dueDate?: InputMaybe<Scalars['DateTime']>;
  items?: InputMaybe<Array<OrderItemInput>>;
};

export type UpdateParameterReferentialOrderInput = {
  id: Scalars['ID'];
  key?: InputMaybe<ParameterReferentialEnum>;
  value?: InputMaybe<Scalars['String']>;
};

export type UpdateReferentialOrderInput = {
  id: Scalars['ID'];
  parameters: Array<UpdateParameterReferentialOrderInput>;
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
