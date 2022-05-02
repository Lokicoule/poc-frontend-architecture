import * as Types from '../dtos/customers.dto.generated';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
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

export type GetReferentialCustomerQueryVariables = Types.Exact<{
  getReferentialCustomerId: Types.Scalars['String'];
  populate: Types.Scalars['Boolean'];
}>;


export type GetReferentialCustomerQuery = { __typename?: 'Query', getReferentialCustomer?: { __typename?: 'ReferentialCustomer', useCase: Types.UseCaseReferentialEnum, id: string, parameters?: Array<{ __typename?: 'ParameterReferentialCustomer', key: Types.ParameterReferentialEnum, value: string, id: string }> | null } | null };

export type GetReferentialCustomersQueryVariables = Types.Exact<{
  populate: Types.Scalars['Boolean'];
}>;


export type GetReferentialCustomersQuery = { __typename?: 'Query', getReferentialCustomers?: Array<{ __typename?: 'ReferentialCustomer', id: string, useCase: Types.UseCaseReferentialEnum, parameters?: Array<{ __typename?: 'ParameterReferentialCustomer', value: string, key: Types.ParameterReferentialEnum, id: string }> | null }> | null };

export type UpdateReferentialCustomerMutationVariables = Types.Exact<{
  updateReferentialCustomerId: Types.Scalars['String'];
  updateReferentialCustomerInput: Types.UpdateReferentialCustomerInput;
}>;


export type UpdateReferentialCustomerMutation = { __typename?: 'Mutation', updateReferentialCustomer: { __typename?: 'ReferentialCustomer', id: string, useCase: Types.UseCaseReferentialEnum } };


export const GetReferentialCustomerDocument = gql`
    query GetReferentialCustomer($getReferentialCustomerId: String!, $populate: Boolean!) {
  getReferentialCustomer(id: $getReferentialCustomerId) {
    useCase
    parameters(populate: $populate) {
      key
      value
      id
    }
    id
  }
}
    `;

/**
 * __useGetReferentialCustomerQuery__
 *
 * To run a query within a React component, call `useGetReferentialCustomerQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetReferentialCustomerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetReferentialCustomerQuery({
 *   variables: {
 *      getReferentialCustomerId: // value for 'getReferentialCustomerId'
 *      populate: // value for 'populate'
 *   },
 * });
 */
export function useGetReferentialCustomerQuery(baseOptions: Apollo.QueryHookOptions<GetReferentialCustomerQuery, GetReferentialCustomerQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetReferentialCustomerQuery, GetReferentialCustomerQueryVariables>(GetReferentialCustomerDocument, options);
      }
export function useGetReferentialCustomerLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetReferentialCustomerQuery, GetReferentialCustomerQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetReferentialCustomerQuery, GetReferentialCustomerQueryVariables>(GetReferentialCustomerDocument, options);
        }
export type GetReferentialCustomerQueryHookResult = ReturnType<typeof useGetReferentialCustomerQuery>;
export type GetReferentialCustomerLazyQueryHookResult = ReturnType<typeof useGetReferentialCustomerLazyQuery>;
export type GetReferentialCustomerQueryResult = Apollo.QueryResult<GetReferentialCustomerQuery, GetReferentialCustomerQueryVariables>;
export const GetReferentialCustomersDocument = gql`
    query GetReferentialCustomers($populate: Boolean!) {
  getReferentialCustomers {
    id
    parameters(populate: $populate) {
      value
      key
      id
    }
    useCase
  }
}
    `;

/**
 * __useGetReferentialCustomersQuery__
 *
 * To run a query within a React component, call `useGetReferentialCustomersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetReferentialCustomersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetReferentialCustomersQuery({
 *   variables: {
 *      populate: // value for 'populate'
 *   },
 * });
 */
export function useGetReferentialCustomersQuery(baseOptions: Apollo.QueryHookOptions<GetReferentialCustomersQuery, GetReferentialCustomersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetReferentialCustomersQuery, GetReferentialCustomersQueryVariables>(GetReferentialCustomersDocument, options);
      }
export function useGetReferentialCustomersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetReferentialCustomersQuery, GetReferentialCustomersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetReferentialCustomersQuery, GetReferentialCustomersQueryVariables>(GetReferentialCustomersDocument, options);
        }
export type GetReferentialCustomersQueryHookResult = ReturnType<typeof useGetReferentialCustomersQuery>;
export type GetReferentialCustomersLazyQueryHookResult = ReturnType<typeof useGetReferentialCustomersLazyQuery>;
export type GetReferentialCustomersQueryResult = Apollo.QueryResult<GetReferentialCustomersQuery, GetReferentialCustomersQueryVariables>;
export const UpdateReferentialCustomerDocument = gql`
    mutation UpdateReferentialCustomer($updateReferentialCustomerId: String!, $updateReferentialCustomerInput: UpdateReferentialCustomerInput!) {
  updateReferentialCustomer(
    id: $updateReferentialCustomerId
    updateReferentialCustomerInput: $updateReferentialCustomerInput
  ) {
    id
    useCase
  }
}
    `;
export type UpdateReferentialCustomerMutationFn = Apollo.MutationFunction<UpdateReferentialCustomerMutation, UpdateReferentialCustomerMutationVariables>;

/**
 * __useUpdateReferentialCustomerMutation__
 *
 * To run a mutation, you first call `useUpdateReferentialCustomerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateReferentialCustomerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateReferentialCustomerMutation, { data, loading, error }] = useUpdateReferentialCustomerMutation({
 *   variables: {
 *      updateReferentialCustomerId: // value for 'updateReferentialCustomerId'
 *      updateReferentialCustomerInput: // value for 'updateReferentialCustomerInput'
 *   },
 * });
 */
export function useUpdateReferentialCustomerMutation(baseOptions?: Apollo.MutationHookOptions<UpdateReferentialCustomerMutation, UpdateReferentialCustomerMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateReferentialCustomerMutation, UpdateReferentialCustomerMutationVariables>(UpdateReferentialCustomerDocument, options);
      }
export type UpdateReferentialCustomerMutationHookResult = ReturnType<typeof useUpdateReferentialCustomerMutation>;
export type UpdateReferentialCustomerMutationResult = Apollo.MutationResult<UpdateReferentialCustomerMutation>;
export type UpdateReferentialCustomerMutationOptions = Apollo.BaseMutationOptions<UpdateReferentialCustomerMutation, UpdateReferentialCustomerMutationVariables>;