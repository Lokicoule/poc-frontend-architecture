import * as Types from '../dtos/products.dto.generated';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetReferentialProductQueryVariables = Types.Exact<{
  getReferentialProductId: Types.Scalars['String'];
  populate: Types.Scalars['Boolean'];
}>;


export type GetReferentialProductQuery = { __typename?: 'Query', getReferentialProduct?: { __typename?: 'ReferentialProduct', id: string, useCase: Types.UseCaseReferentialEnum, parameters?: Array<{ __typename?: 'ParameterReferentialProduct', value: string, key: Types.ParameterReferentialEnum, id: string }> | null } | null };

export type GetReferentialProductsQueryVariables = Types.Exact<{
  populate: Types.Scalars['Boolean'];
}>;


export type GetReferentialProductsQuery = { __typename?: 'Query', getReferentialProducts?: Array<{ __typename?: 'ReferentialProduct', id: string, useCase: Types.UseCaseReferentialEnum, parameters?: Array<{ __typename?: 'ParameterReferentialProduct', id: string, key: Types.ParameterReferentialEnum, value: string }> | null }> | null };

export type UpdateReferentialProductMutationVariables = Types.Exact<{
  updateReferentialProductId: Types.Scalars['String'];
  updateReferentialProductInput: Types.UpdateReferentialProductInput;
}>;


export type UpdateReferentialProductMutation = { __typename?: 'Mutation', updateReferentialProduct: { __typename?: 'ReferentialProduct', id: string, useCase: Types.UseCaseReferentialEnum } };


export const GetReferentialProductDocument = gql`
    query GetReferentialProduct($getReferentialProductId: String!, $populate: Boolean!) {
  getReferentialProduct(id: $getReferentialProductId) {
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
 * __useGetReferentialProductQuery__
 *
 * To run a query within a React component, call `useGetReferentialProductQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetReferentialProductQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetReferentialProductQuery({
 *   variables: {
 *      getReferentialProductId: // value for 'getReferentialProductId'
 *      populate: // value for 'populate'
 *   },
 * });
 */
export function useGetReferentialProductQuery(baseOptions: Apollo.QueryHookOptions<GetReferentialProductQuery, GetReferentialProductQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetReferentialProductQuery, GetReferentialProductQueryVariables>(GetReferentialProductDocument, options);
      }
export function useGetReferentialProductLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetReferentialProductQuery, GetReferentialProductQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetReferentialProductQuery, GetReferentialProductQueryVariables>(GetReferentialProductDocument, options);
        }
export type GetReferentialProductQueryHookResult = ReturnType<typeof useGetReferentialProductQuery>;
export type GetReferentialProductLazyQueryHookResult = ReturnType<typeof useGetReferentialProductLazyQuery>;
export type GetReferentialProductQueryResult = Apollo.QueryResult<GetReferentialProductQuery, GetReferentialProductQueryVariables>;
export const GetReferentialProductsDocument = gql`
    query GetReferentialProducts($populate: Boolean!) {
  getReferentialProducts {
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
 * __useGetReferentialProductsQuery__
 *
 * To run a query within a React component, call `useGetReferentialProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetReferentialProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetReferentialProductsQuery({
 *   variables: {
 *      populate: // value for 'populate'
 *   },
 * });
 */
export function useGetReferentialProductsQuery(baseOptions: Apollo.QueryHookOptions<GetReferentialProductsQuery, GetReferentialProductsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetReferentialProductsQuery, GetReferentialProductsQueryVariables>(GetReferentialProductsDocument, options);
      }
export function useGetReferentialProductsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetReferentialProductsQuery, GetReferentialProductsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetReferentialProductsQuery, GetReferentialProductsQueryVariables>(GetReferentialProductsDocument, options);
        }
export type GetReferentialProductsQueryHookResult = ReturnType<typeof useGetReferentialProductsQuery>;
export type GetReferentialProductsLazyQueryHookResult = ReturnType<typeof useGetReferentialProductsLazyQuery>;
export type GetReferentialProductsQueryResult = Apollo.QueryResult<GetReferentialProductsQuery, GetReferentialProductsQueryVariables>;
export const UpdateReferentialProductDocument = gql`
    mutation UpdateReferentialProduct($updateReferentialProductId: String!, $updateReferentialProductInput: UpdateReferentialProductInput!) {
  updateReferentialProduct(
    id: $updateReferentialProductId
    updateReferentialProductInput: $updateReferentialProductInput
  ) {
    id
    useCase
  }
}
    `;
export type UpdateReferentialProductMutationFn = Apollo.MutationFunction<UpdateReferentialProductMutation, UpdateReferentialProductMutationVariables>;

/**
 * __useUpdateReferentialProductMutation__
 *
 * To run a mutation, you first call `useUpdateReferentialProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateReferentialProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateReferentialProductMutation, { data, loading, error }] = useUpdateReferentialProductMutation({
 *   variables: {
 *      updateReferentialProductId: // value for 'updateReferentialProductId'
 *      updateReferentialProductInput: // value for 'updateReferentialProductInput'
 *   },
 * });
 */
export function useUpdateReferentialProductMutation(baseOptions?: Apollo.MutationHookOptions<UpdateReferentialProductMutation, UpdateReferentialProductMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateReferentialProductMutation, UpdateReferentialProductMutationVariables>(UpdateReferentialProductDocument, options);
      }
export type UpdateReferentialProductMutationHookResult = ReturnType<typeof useUpdateReferentialProductMutation>;
export type UpdateReferentialProductMutationResult = Apollo.MutationResult<UpdateReferentialProductMutation>;
export type UpdateReferentialProductMutationOptions = Apollo.BaseMutationOptions<UpdateReferentialProductMutation, UpdateReferentialProductMutationVariables>;