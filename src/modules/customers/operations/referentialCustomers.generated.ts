import * as Types from '../dtos/customers.dto.generated';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
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