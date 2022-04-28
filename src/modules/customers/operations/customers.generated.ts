import * as Types from '../dtos/customers.dto.generated';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetCustomerQueryVariables = Types.Exact<{
  getCustomerId: Types.Scalars['String'];
}>;


export type GetCustomerQuery = { __typename?: 'Query', getCustomer?: { __typename?: 'Customer', address: string, city: string, createdAt?: any | null, code: string, id: string, naming: string, updatedAt?: any | null, zipCode: string } | null };

export type GetCustomersQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetCustomersQuery = { __typename?: 'Query', getCustomers?: Array<{ __typename?: 'Customer', address: string, city: string, code: string, createdAt?: any | null, id: string, naming: string, updatedAt?: any | null, zipCode: string }> | null };

export type CreateCustomerMutationVariables = Types.Exact<{
  createCustomerInput: Types.CreateCustomerInput;
}>;


export type CreateCustomerMutation = { __typename?: 'Mutation', createCustomer: { __typename?: 'Customer', id: string, naming: string } };

export type UpdateCustomerMutationVariables = Types.Exact<{
  updateCustomerId: Types.Scalars['String'];
  updateCustomerInput: Types.UpdateCustomerInput;
}>;


export type UpdateCustomerMutation = { __typename?: 'Mutation', updateCustomer: { __typename?: 'Customer', id: string, naming: string } };

export type RemoveCustomerMutationVariables = Types.Exact<{
  removeCustomerId: Types.Scalars['String'];
}>;


export type RemoveCustomerMutation = { __typename?: 'Mutation', removeCustomer: { __typename?: 'Customer', id: string, naming: string } };

export type RemoveCustomersMutationVariables = Types.Exact<{
  ids: Array<Types.Scalars['String']> | Types.Scalars['String'];
}>;


export type RemoveCustomersMutation = { __typename?: 'Mutation', removeCustomers: boolean };


export const GetCustomerDocument = gql`
    query GetCustomer($getCustomerId: String!) {
  getCustomer(id: $getCustomerId) {
    address
    city
    createdAt
    code
    id
    naming
    updatedAt
    zipCode
  }
}
    `;

/**
 * __useGetCustomerQuery__
 *
 * To run a query within a React component, call `useGetCustomerQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCustomerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCustomerQuery({
 *   variables: {
 *      getCustomerId: // value for 'getCustomerId'
 *   },
 * });
 */
export function useGetCustomerQuery(baseOptions: Apollo.QueryHookOptions<GetCustomerQuery, GetCustomerQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCustomerQuery, GetCustomerQueryVariables>(GetCustomerDocument, options);
      }
export function useGetCustomerLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCustomerQuery, GetCustomerQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCustomerQuery, GetCustomerQueryVariables>(GetCustomerDocument, options);
        }
export type GetCustomerQueryHookResult = ReturnType<typeof useGetCustomerQuery>;
export type GetCustomerLazyQueryHookResult = ReturnType<typeof useGetCustomerLazyQuery>;
export type GetCustomerQueryResult = Apollo.QueryResult<GetCustomerQuery, GetCustomerQueryVariables>;
export const GetCustomersDocument = gql`
    query GetCustomers {
  getCustomers {
    address
    city
    code
    createdAt
    id
    naming
    updatedAt
    zipCode
  }
}
    `;

/**
 * __useGetCustomersQuery__
 *
 * To run a query within a React component, call `useGetCustomersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCustomersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCustomersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCustomersQuery(baseOptions?: Apollo.QueryHookOptions<GetCustomersQuery, GetCustomersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCustomersQuery, GetCustomersQueryVariables>(GetCustomersDocument, options);
      }
export function useGetCustomersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCustomersQuery, GetCustomersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCustomersQuery, GetCustomersQueryVariables>(GetCustomersDocument, options);
        }
export type GetCustomersQueryHookResult = ReturnType<typeof useGetCustomersQuery>;
export type GetCustomersLazyQueryHookResult = ReturnType<typeof useGetCustomersLazyQuery>;
export type GetCustomersQueryResult = Apollo.QueryResult<GetCustomersQuery, GetCustomersQueryVariables>;
export const CreateCustomerDocument = gql`
    mutation CreateCustomer($createCustomerInput: CreateCustomerInput!) {
  createCustomer(createCustomerInput: $createCustomerInput) {
    id
    naming
  }
}
    `;
export type CreateCustomerMutationFn = Apollo.MutationFunction<CreateCustomerMutation, CreateCustomerMutationVariables>;

/**
 * __useCreateCustomerMutation__
 *
 * To run a mutation, you first call `useCreateCustomerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCustomerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCustomerMutation, { data, loading, error }] = useCreateCustomerMutation({
 *   variables: {
 *      createCustomerInput: // value for 'createCustomerInput'
 *   },
 * });
 */
export function useCreateCustomerMutation(baseOptions?: Apollo.MutationHookOptions<CreateCustomerMutation, CreateCustomerMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCustomerMutation, CreateCustomerMutationVariables>(CreateCustomerDocument, options);
      }
export type CreateCustomerMutationHookResult = ReturnType<typeof useCreateCustomerMutation>;
export type CreateCustomerMutationResult = Apollo.MutationResult<CreateCustomerMutation>;
export type CreateCustomerMutationOptions = Apollo.BaseMutationOptions<CreateCustomerMutation, CreateCustomerMutationVariables>;
export const UpdateCustomerDocument = gql`
    mutation UpdateCustomer($updateCustomerId: String!, $updateCustomerInput: UpdateCustomerInput!) {
  updateCustomer(id: $updateCustomerId, updateCustomerInput: $updateCustomerInput) {
    id
    naming
  }
}
    `;
export type UpdateCustomerMutationFn = Apollo.MutationFunction<UpdateCustomerMutation, UpdateCustomerMutationVariables>;

/**
 * __useUpdateCustomerMutation__
 *
 * To run a mutation, you first call `useUpdateCustomerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCustomerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCustomerMutation, { data, loading, error }] = useUpdateCustomerMutation({
 *   variables: {
 *      updateCustomerId: // value for 'updateCustomerId'
 *      updateCustomerInput: // value for 'updateCustomerInput'
 *   },
 * });
 */
export function useUpdateCustomerMutation(baseOptions?: Apollo.MutationHookOptions<UpdateCustomerMutation, UpdateCustomerMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateCustomerMutation, UpdateCustomerMutationVariables>(UpdateCustomerDocument, options);
      }
export type UpdateCustomerMutationHookResult = ReturnType<typeof useUpdateCustomerMutation>;
export type UpdateCustomerMutationResult = Apollo.MutationResult<UpdateCustomerMutation>;
export type UpdateCustomerMutationOptions = Apollo.BaseMutationOptions<UpdateCustomerMutation, UpdateCustomerMutationVariables>;
export const RemoveCustomerDocument = gql`
    mutation RemoveCustomer($removeCustomerId: String!) {
  removeCustomer(id: $removeCustomerId) {
    id
    naming
  }
}
    `;
export type RemoveCustomerMutationFn = Apollo.MutationFunction<RemoveCustomerMutation, RemoveCustomerMutationVariables>;

/**
 * __useRemoveCustomerMutation__
 *
 * To run a mutation, you first call `useRemoveCustomerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveCustomerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeCustomerMutation, { data, loading, error }] = useRemoveCustomerMutation({
 *   variables: {
 *      removeCustomerId: // value for 'removeCustomerId'
 *   },
 * });
 */
export function useRemoveCustomerMutation(baseOptions?: Apollo.MutationHookOptions<RemoveCustomerMutation, RemoveCustomerMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveCustomerMutation, RemoveCustomerMutationVariables>(RemoveCustomerDocument, options);
      }
export type RemoveCustomerMutationHookResult = ReturnType<typeof useRemoveCustomerMutation>;
export type RemoveCustomerMutationResult = Apollo.MutationResult<RemoveCustomerMutation>;
export type RemoveCustomerMutationOptions = Apollo.BaseMutationOptions<RemoveCustomerMutation, RemoveCustomerMutationVariables>;
export const RemoveCustomersDocument = gql`
    mutation RemoveCustomers($ids: [String!]!) {
  removeCustomers(ids: $ids)
}
    `;
export type RemoveCustomersMutationFn = Apollo.MutationFunction<RemoveCustomersMutation, RemoveCustomersMutationVariables>;

/**
 * __useRemoveCustomersMutation__
 *
 * To run a mutation, you first call `useRemoveCustomersMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveCustomersMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeCustomersMutation, { data, loading, error }] = useRemoveCustomersMutation({
 *   variables: {
 *      ids: // value for 'ids'
 *   },
 * });
 */
export function useRemoveCustomersMutation(baseOptions?: Apollo.MutationHookOptions<RemoveCustomersMutation, RemoveCustomersMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveCustomersMutation, RemoveCustomersMutationVariables>(RemoveCustomersDocument, options);
      }
export type RemoveCustomersMutationHookResult = ReturnType<typeof useRemoveCustomersMutation>;
export type RemoveCustomersMutationResult = Apollo.MutationResult<RemoveCustomersMutation>;
export type RemoveCustomersMutationOptions = Apollo.BaseMutationOptions<RemoveCustomersMutation, RemoveCustomersMutationVariables>;