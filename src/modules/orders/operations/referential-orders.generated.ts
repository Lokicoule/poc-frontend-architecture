import * as Types from '../dtos/orders.dto.generated';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetReferentialOrderQueryVariables = Types.Exact<{
  getReferentialOrderId: Types.Scalars['String'];
  populate: Types.Scalars['Boolean'];
}>;


export type GetReferentialOrderQuery = { __typename?: 'Query', getReferentialOrder?: { __typename?: 'ReferentialOrder', id: string, useCase: Types.UseCaseReferentialEnum, parameters?: Array<{ __typename?: 'ParameterReferentialOrder', value: string, key: Types.ParameterReferentialEnum, id: string }> | null } | null };

export type GetReferentialOrdersQueryVariables = Types.Exact<{
  populate: Types.Scalars['Boolean'];
}>;


export type GetReferentialOrdersQuery = { __typename?: 'Query', getReferentialOrders?: Array<{ __typename?: 'ReferentialOrder', id: string, useCase: Types.UseCaseReferentialEnum, parameters?: Array<{ __typename?: 'ParameterReferentialOrder', id: string, key: Types.ParameterReferentialEnum, value: string }> | null }> | null };

export type UpdateReferentialOrderMutationVariables = Types.Exact<{
  updateReferentialOrderId: Types.Scalars['String'];
  updateReferentialOrderInput: Types.UpdateReferentialOrderInput;
}>;


export type UpdateReferentialOrderMutation = { __typename?: 'Mutation', updateReferentialOrder: { __typename?: 'ReferentialOrder', id: string, useCase: Types.UseCaseReferentialEnum } };


export const GetReferentialOrderDocument = gql`
    query GetReferentialOrder($getReferentialOrderId: String!, $populate: Boolean!) {
  getReferentialOrder(id: $getReferentialOrderId) {
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
 * __useGetReferentialOrderQuery__
 *
 * To run a query within a React component, call `useGetReferentialOrderQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetReferentialOrderQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetReferentialOrderQuery({
 *   variables: {
 *      getReferentialOrderId: // value for 'getReferentialOrderId'
 *      populate: // value for 'populate'
 *   },
 * });
 */
export function useGetReferentialOrderQuery(baseOptions: Apollo.QueryHookOptions<GetReferentialOrderQuery, GetReferentialOrderQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetReferentialOrderQuery, GetReferentialOrderQueryVariables>(GetReferentialOrderDocument, options);
      }
export function useGetReferentialOrderLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetReferentialOrderQuery, GetReferentialOrderQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetReferentialOrderQuery, GetReferentialOrderQueryVariables>(GetReferentialOrderDocument, options);
        }
export type GetReferentialOrderQueryHookResult = ReturnType<typeof useGetReferentialOrderQuery>;
export type GetReferentialOrderLazyQueryHookResult = ReturnType<typeof useGetReferentialOrderLazyQuery>;
export type GetReferentialOrderQueryResult = Apollo.QueryResult<GetReferentialOrderQuery, GetReferentialOrderQueryVariables>;
export const GetReferentialOrdersDocument = gql`
    query GetReferentialOrders($populate: Boolean!) {
  getReferentialOrders {
    id
    parameters(populate: $populate) {
      id
      key
      value
    }
    useCase
  }
}
    `;

/**
 * __useGetReferentialOrdersQuery__
 *
 * To run a query within a React component, call `useGetReferentialOrdersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetReferentialOrdersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetReferentialOrdersQuery({
 *   variables: {
 *      populate: // value for 'populate'
 *   },
 * });
 */
export function useGetReferentialOrdersQuery(baseOptions: Apollo.QueryHookOptions<GetReferentialOrdersQuery, GetReferentialOrdersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetReferentialOrdersQuery, GetReferentialOrdersQueryVariables>(GetReferentialOrdersDocument, options);
      }
export function useGetReferentialOrdersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetReferentialOrdersQuery, GetReferentialOrdersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetReferentialOrdersQuery, GetReferentialOrdersQueryVariables>(GetReferentialOrdersDocument, options);
        }
export type GetReferentialOrdersQueryHookResult = ReturnType<typeof useGetReferentialOrdersQuery>;
export type GetReferentialOrdersLazyQueryHookResult = ReturnType<typeof useGetReferentialOrdersLazyQuery>;
export type GetReferentialOrdersQueryResult = Apollo.QueryResult<GetReferentialOrdersQuery, GetReferentialOrdersQueryVariables>;
export const UpdateReferentialOrderDocument = gql`
    mutation UpdateReferentialOrder($updateReferentialOrderId: String!, $updateReferentialOrderInput: UpdateReferentialOrderInput!) {
  updateReferentialOrder(
    id: $updateReferentialOrderId
    updateReferentialOrderInput: $updateReferentialOrderInput
  ) {
    id
    useCase
  }
}
    `;
export type UpdateReferentialOrderMutationFn = Apollo.MutationFunction<UpdateReferentialOrderMutation, UpdateReferentialOrderMutationVariables>;

/**
 * __useUpdateReferentialOrderMutation__
 *
 * To run a mutation, you first call `useUpdateReferentialOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateReferentialOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateReferentialOrderMutation, { data, loading, error }] = useUpdateReferentialOrderMutation({
 *   variables: {
 *      updateReferentialOrderId: // value for 'updateReferentialOrderId'
 *      updateReferentialOrderInput: // value for 'updateReferentialOrderInput'
 *   },
 * });
 */
export function useUpdateReferentialOrderMutation(baseOptions?: Apollo.MutationHookOptions<UpdateReferentialOrderMutation, UpdateReferentialOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateReferentialOrderMutation, UpdateReferentialOrderMutationVariables>(UpdateReferentialOrderDocument, options);
      }
export type UpdateReferentialOrderMutationHookResult = ReturnType<typeof useUpdateReferentialOrderMutation>;
export type UpdateReferentialOrderMutationResult = Apollo.MutationResult<UpdateReferentialOrderMutation>;
export type UpdateReferentialOrderMutationOptions = Apollo.BaseMutationOptions<UpdateReferentialOrderMutation, UpdateReferentialOrderMutationVariables>;