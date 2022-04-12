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

export type CreateOrderInput = {
  billingDate?: InputMaybe<Scalars['DateTime']>;
  code?: InputMaybe<Scalars['String']>;
  customer: OrderCustomerInput;
  dueDate?: InputMaybe<Scalars['DateTime']>;
  items?: InputMaybe<Array<OrderItemInput>>;
};

export type CreateProductInput = {
  code?: InputMaybe<Scalars['String']>;
  label: Scalars['String'];
};

export type CreateReferentialCustomerInput = {
  parameters: Array<ParameterReferentialCustomerInput>;
  useCase: UseCaseReferentialEnum;
};

export type CreateReferentialOrderInput = {
  parameters: Array<ParameterReferentialOrderInput>;
  useCase: UseCaseReferentialEnum;
};

export type CreateReferentialProductInput = {
  parameters: Array<ParameterReferentialProductInput>;
  useCase: UseCaseReferentialEnum;
};

export type Customer = {
  __typename?: 'Customer';
  _id: Scalars['ID'];
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
  createOrder: Order;
  createProduct: Product;
  createReferentialCustomer: ReferentialCustomer;
  createReferentialOrder: ReferentialOrder;
  createReferentialProduct: ReferentialProduct;
  removeCustomer: Customer;
  removeCustomers: Scalars['Boolean'];
  removeOrder: Order;
  removeOrders: Scalars['Boolean'];
  removeProduct: Product;
  removeProducts: Scalars['Boolean'];
  removeReferentialCustomer: ReferentialCustomer;
  removeReferentialCustomers: Scalars['Boolean'];
  removeReferentialOrder: ReferentialOrder;
  removeReferentialOrders: Scalars['Boolean'];
  removeReferentialProduct: ReferentialProduct;
  removeReferentialProducts: Scalars['Boolean'];
  updateCustomer: Customer;
  updateOrder: Order;
  updateProduct: Product;
  updateReferentialCustomer: ReferentialCustomer;
  updateReferentialOrder: ReferentialOrder;
  updateReferentialProduct: ReferentialProduct;
};


export type MutationCreateCustomerArgs = {
  createCustomerInput: CreateCustomerInput;
};


export type MutationCreateOrderArgs = {
  createOrderInput: CreateOrderInput;
};


export type MutationCreateProductArgs = {
  createProductInput: CreateProductInput;
};


export type MutationCreateReferentialCustomerArgs = {
  createReferentialCustomerInput: CreateReferentialCustomerInput;
};


export type MutationCreateReferentialOrderArgs = {
  createReferentialOrderInput: CreateReferentialOrderInput;
};


export type MutationCreateReferentialProductArgs = {
  createReferentialProductInput: CreateReferentialProductInput;
};


export type MutationRemoveCustomerArgs = {
  id: Scalars['String'];
};


export type MutationRemoveCustomersArgs = {
  ids: Array<Scalars['String']>;
};


export type MutationRemoveOrderArgs = {
  id: Scalars['String'];
};


export type MutationRemoveOrdersArgs = {
  ids: Array<Scalars['String']>;
};


export type MutationRemoveProductArgs = {
  id: Scalars['String'];
};


export type MutationRemoveProductsArgs = {
  ids: Array<Scalars['String']>;
};


export type MutationRemoveReferentialCustomerArgs = {
  id: Scalars['String'];
};


export type MutationRemoveReferentialCustomersArgs = {
  ids: Array<Scalars['String']>;
};


export type MutationRemoveReferentialOrderArgs = {
  id: Scalars['String'];
};


export type MutationRemoveReferentialOrdersArgs = {
  ids: Array<Scalars['String']>;
};


export type MutationRemoveReferentialProductArgs = {
  id: Scalars['String'];
};


export type MutationRemoveReferentialProductsArgs = {
  ids: Array<Scalars['String']>;
};


export type MutationUpdateCustomerArgs = {
  id: Scalars['String'];
  updateCustomerInput: UpdateCustomerInput;
};


export type MutationUpdateOrderArgs = {
  id: Scalars['String'];
  updateOrderInput: UpdateOrderInput;
};


export type MutationUpdateProductArgs = {
  id: Scalars['String'];
  updateProductInput: UpdateProductInput;
};


export type MutationUpdateReferentialCustomerArgs = {
  id: Scalars['String'];
  updateReferentialCustomerInput: UpdateReferentialCustomerInput;
};


export type MutationUpdateReferentialOrderArgs = {
  id: Scalars['String'];
  updateReferentialOrderInput: UpdateReferentialOrderInput;
};


export type MutationUpdateReferentialProductArgs = {
  id: Scalars['String'];
  updateReferentialProductInput: UpdateReferentialProductInput;
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

export type ParameterReferentialCustomer = {
  __typename?: 'ParameterReferentialCustomer';
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  key: ParameterReferentialEnum;
  updatedAt?: Maybe<Scalars['DateTime']>;
  value: Scalars['String'];
};

export type ParameterReferentialCustomerInput = {
  key: ParameterReferentialEnum;
  value: Scalars['String'];
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

export type ParameterReferentialOrderInput = {
  key: ParameterReferentialEnum;
  value: Scalars['String'];
};

export type ParameterReferentialProduct = {
  __typename?: 'ParameterReferentialProduct';
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  key: ParameterReferentialEnum;
  updatedAt?: Maybe<Scalars['DateTime']>;
  value: Scalars['String'];
};

export type ParameterReferentialProductInput = {
  key: ParameterReferentialEnum;
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
  getCustomer?: Maybe<Customer>;
  getCustomers?: Maybe<Array<Customer>>;
  getOrder?: Maybe<Order>;
  getOrders?: Maybe<Array<Order>>;
  getProduct?: Maybe<Product>;
  getProducts?: Maybe<Array<Product>>;
  getReferentialCustomer?: Maybe<ReferentialCustomer>;
  getReferentialCustomers?: Maybe<Array<ReferentialCustomer>>;
  getReferentialOrder?: Maybe<ReferentialOrder>;
  getReferentialOrders?: Maybe<Array<ReferentialOrder>>;
  getReferentialProduct?: Maybe<ReferentialProduct>;
  getReferentialProducts?: Maybe<Array<ReferentialProduct>>;
};


export type QueryGetCustomerArgs = {
  id: Scalars['String'];
};


export type QueryGetOrderArgs = {
  id: Scalars['String'];
};


export type QueryGetProductArgs = {
  id: Scalars['String'];
};


export type QueryGetReferentialCustomerArgs = {
  id: Scalars['String'];
};


export type QueryGetReferentialOrderArgs = {
  id: Scalars['String'];
};


export type QueryGetReferentialProductArgs = {
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

export type UpdateCustomerInput = {
  address?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  code?: InputMaybe<Scalars['String']>;
  naming?: InputMaybe<Scalars['String']>;
  zipCode?: InputMaybe<Scalars['String']>;
};

export type UpdateOrderInput = {
  billingDate?: InputMaybe<Scalars['DateTime']>;
  code?: InputMaybe<Scalars['String']>;
  customer?: InputMaybe<OrderCustomerInput>;
  dueDate?: InputMaybe<Scalars['DateTime']>;
  items?: InputMaybe<Array<OrderItemInput>>;
};

export type UpdateProductInput = {
  code?: InputMaybe<Scalars['String']>;
  label?: InputMaybe<Scalars['String']>;
};

export type UpdateReferentialCustomerInput = {
  parameters?: InputMaybe<Array<ParameterReferentialCustomerInput>>;
  useCase?: InputMaybe<UseCaseReferentialEnum>;
};

export type UpdateReferentialOrderInput = {
  parameters?: InputMaybe<Array<ParameterReferentialOrderInput>>;
  useCase?: InputMaybe<UseCaseReferentialEnum>;
};

export type UpdateReferentialProductInput = {
  parameters?: InputMaybe<Array<ParameterReferentialProductInput>>;
  useCase?: InputMaybe<UseCaseReferentialEnum>;
};

export enum UseCaseReferentialEnum {
  CodeGenerator = 'CODE_GENERATOR'
}
