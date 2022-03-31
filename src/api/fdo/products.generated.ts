import * as Types from '../../types/dto-types.generated';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetProductQueryVariables = Types.Exact<{
  getProductId: Types.Scalars['String'];
}>;


export type GetProductQuery = { __typename?: 'Query', getProduct?: { __typename?: 'Product', code: string, createdAt?: any | null, id: string, label: string, updatedAt?: any | null } | null };

export type GetProductsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetProductsQuery = { __typename?: 'Query', getProducts?: Array<{ __typename?: 'Product', code: string, createdAt?: any | null, label: string, id: string, updatedAt?: any | null }> | null };

export type CreateProductMutationVariables = Types.Exact<{
  createProductInput: Types.CreateProductInput;
}>;


export type CreateProductMutation = { __typename?: 'Mutation', createProduct: { __typename?: 'Product', id: string, label: string } };

export type UpdateProductMutationVariables = Types.Exact<{
  updateProductId: Types.Scalars['String'];
  updateProductInput: Types.UpdateProductInput;
}>;


export type UpdateProductMutation = { __typename?: 'Mutation', updateProduct: { __typename?: 'Product', id: string, label: string } };

export type RemoveProductMutationVariables = Types.Exact<{
  removeProductId: Types.Scalars['String'];
}>;


export type RemoveProductMutation = { __typename?: 'Mutation', removeProduct: { __typename?: 'Product', id: string, label: string } };

export type RemoveProductsMutationVariables = Types.Exact<{
  ids: Array<Types.Scalars['String']> | Types.Scalars['String'];
}>;


export type RemoveProductsMutation = { __typename?: 'Mutation', removeProducts: boolean };


export const GetProductDocument = gql`
    query GetProduct($getProductId: String!) {
  getProduct(id: $getProductId) {
    code
    createdAt
    id
    label
    updatedAt
  }
}
    `;

/**
 * __useGetProductQuery__
 *
 * To run a query within a React component, call `useGetProductQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductQuery({
 *   variables: {
 *      getProductId: // value for 'getProductId'
 *   },
 * });
 */
export function useGetProductQuery(baseOptions: Apollo.QueryHookOptions<GetProductQuery, GetProductQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProductQuery, GetProductQueryVariables>(GetProductDocument, options);
      }
export function useGetProductLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProductQuery, GetProductQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProductQuery, GetProductQueryVariables>(GetProductDocument, options);
        }
export type GetProductQueryHookResult = ReturnType<typeof useGetProductQuery>;
export type GetProductLazyQueryHookResult = ReturnType<typeof useGetProductLazyQuery>;
export type GetProductQueryResult = Apollo.QueryResult<GetProductQuery, GetProductQueryVariables>;
export const GetProductsDocument = gql`
    query GetProducts {
  getProducts {
    code
    createdAt
    label
    id
    updatedAt
  }
}
    `;

/**
 * __useGetProductsQuery__
 *
 * To run a query within a React component, call `useGetProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetProductsQuery(baseOptions?: Apollo.QueryHookOptions<GetProductsQuery, GetProductsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProductsQuery, GetProductsQueryVariables>(GetProductsDocument, options);
      }
export function useGetProductsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProductsQuery, GetProductsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProductsQuery, GetProductsQueryVariables>(GetProductsDocument, options);
        }
export type GetProductsQueryHookResult = ReturnType<typeof useGetProductsQuery>;
export type GetProductsLazyQueryHookResult = ReturnType<typeof useGetProductsLazyQuery>;
export type GetProductsQueryResult = Apollo.QueryResult<GetProductsQuery, GetProductsQueryVariables>;
export const CreateProductDocument = gql`
    mutation CreateProduct($createProductInput: CreateProductInput!) {
  createProduct(createProductInput: $createProductInput) {
    id
    label
  }
}
    `;
export type CreateProductMutationFn = Apollo.MutationFunction<CreateProductMutation, CreateProductMutationVariables>;

/**
 * __useCreateProductMutation__
 *
 * To run a mutation, you first call `useCreateProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProductMutation, { data, loading, error }] = useCreateProductMutation({
 *   variables: {
 *      createProductInput: // value for 'createProductInput'
 *   },
 * });
 */
export function useCreateProductMutation(baseOptions?: Apollo.MutationHookOptions<CreateProductMutation, CreateProductMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateProductMutation, CreateProductMutationVariables>(CreateProductDocument, options);
      }
export type CreateProductMutationHookResult = ReturnType<typeof useCreateProductMutation>;
export type CreateProductMutationResult = Apollo.MutationResult<CreateProductMutation>;
export type CreateProductMutationOptions = Apollo.BaseMutationOptions<CreateProductMutation, CreateProductMutationVariables>;
export const UpdateProductDocument = gql`
    mutation UpdateProduct($updateProductId: String!, $updateProductInput: UpdateProductInput!) {
  updateProduct(id: $updateProductId, updateProductInput: $updateProductInput) {
    id
    label
  }
}
    `;
export type UpdateProductMutationFn = Apollo.MutationFunction<UpdateProductMutation, UpdateProductMutationVariables>;

/**
 * __useUpdateProductMutation__
 *
 * To run a mutation, you first call `useUpdateProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProductMutation, { data, loading, error }] = useUpdateProductMutation({
 *   variables: {
 *      updateProductId: // value for 'updateProductId'
 *      updateProductInput: // value for 'updateProductInput'
 *   },
 * });
 */
export function useUpdateProductMutation(baseOptions?: Apollo.MutationHookOptions<UpdateProductMutation, UpdateProductMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateProductMutation, UpdateProductMutationVariables>(UpdateProductDocument, options);
      }
export type UpdateProductMutationHookResult = ReturnType<typeof useUpdateProductMutation>;
export type UpdateProductMutationResult = Apollo.MutationResult<UpdateProductMutation>;
export type UpdateProductMutationOptions = Apollo.BaseMutationOptions<UpdateProductMutation, UpdateProductMutationVariables>;
export const RemoveProductDocument = gql`
    mutation RemoveProduct($removeProductId: String!) {
  removeProduct(id: $removeProductId) {
    id
    label
  }
}
    `;
export type RemoveProductMutationFn = Apollo.MutationFunction<RemoveProductMutation, RemoveProductMutationVariables>;

/**
 * __useRemoveProductMutation__
 *
 * To run a mutation, you first call `useRemoveProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeProductMutation, { data, loading, error }] = useRemoveProductMutation({
 *   variables: {
 *      removeProductId: // value for 'removeProductId'
 *   },
 * });
 */
export function useRemoveProductMutation(baseOptions?: Apollo.MutationHookOptions<RemoveProductMutation, RemoveProductMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveProductMutation, RemoveProductMutationVariables>(RemoveProductDocument, options);
      }
export type RemoveProductMutationHookResult = ReturnType<typeof useRemoveProductMutation>;
export type RemoveProductMutationResult = Apollo.MutationResult<RemoveProductMutation>;
export type RemoveProductMutationOptions = Apollo.BaseMutationOptions<RemoveProductMutation, RemoveProductMutationVariables>;
export const RemoveProductsDocument = gql`
    mutation RemoveProducts($ids: [String!]!) {
  removeProducts(ids: $ids)
}
    `;
export type RemoveProductsMutationFn = Apollo.MutationFunction<RemoveProductsMutation, RemoveProductsMutationVariables>;

/**
 * __useRemoveProductsMutation__
 *
 * To run a mutation, you first call `useRemoveProductsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveProductsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeProductsMutation, { data, loading, error }] = useRemoveProductsMutation({
 *   variables: {
 *      ids: // value for 'ids'
 *   },
 * });
 */
export function useRemoveProductsMutation(baseOptions?: Apollo.MutationHookOptions<RemoveProductsMutation, RemoveProductsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveProductsMutation, RemoveProductsMutationVariables>(RemoveProductsDocument, options);
      }
export type RemoveProductsMutationHookResult = ReturnType<typeof useRemoveProductsMutation>;
export type RemoveProductsMutationResult = Apollo.MutationResult<RemoveProductsMutation>;
export type RemoveProductsMutationOptions = Apollo.BaseMutationOptions<RemoveProductsMutation, RemoveProductsMutationVariables>;