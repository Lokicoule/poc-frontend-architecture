import * as Types from '../types/types.generated';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetOrderQueryVariables = Types.Exact<{
  getOrderId: Types.Scalars['String'];
  populate: Types.Scalars['Boolean'];
}>;


export type GetOrderQuery = { __typename?: 'Query', getOrder?: { __typename?: 'Order', billingDate?: any | null, code: string, dueDate?: any | null, id: string, items?: Array<{ __typename?: 'OrderItem', id: string, unitPrice: number, amount: number, product?: { __typename?: 'Product', label: string, id: string, code: string } | null }> | null } | null };

export type GetOrdersQueryVariables = Types.Exact<{
  populate: Types.Scalars['Boolean'];
}>;


export type GetOrdersQuery = { __typename?: 'Query', getOrders?: Array<{ __typename?: 'Order', billingDate?: any | null, code: string, dueDate?: any | null, id: string, items?: Array<{ __typename?: 'OrderItem', id: string, amount: number, unitPrice: number, product?: { __typename?: 'Product', id: string, code: string, label: string } | null }> | null }> | null };

export type CreateOrderMutationVariables = Types.Exact<{
  createOrderInput: Types.CreateOrderInput;
}>;


export type CreateOrderMutation = { __typename?: 'Mutation', createOrder: { __typename?: 'Order', code: string, id: string } };

export type UpdateOrderMutationVariables = Types.Exact<{
  updateOrderId: Types.Scalars['String'];
  updateOrderInput: Types.UpdateOrderInput;
}>;


export type UpdateOrderMutation = { __typename?: 'Mutation', updateOrder: { __typename?: 'Order', code: string, id: string } };

export type RemoveOrderMutationVariables = Types.Exact<{
  removeOrderId: Types.Scalars['String'];
}>;


export type RemoveOrderMutation = { __typename?: 'Mutation', removeOrder: { __typename?: 'Order', code: string, id: string } };

export type RemoveOrdersMutationVariables = Types.Exact<{
  ids: Array<Types.Scalars['String']> | Types.Scalars['String'];
}>;


export type RemoveOrdersMutation = { __typename?: 'Mutation', removeOrders: boolean };


export const GetOrderDocument = gql`
    query GetOrder($getOrderId: String!, $populate: Boolean!) {
  getOrder(id: $getOrderId) {
    billingDate
    code
    dueDate
    id
    items(populate: $populate) {
      id
      unitPrice
      product {
        label
        id
        code
      }
      amount
    }
  }
}
    `;

/**
 * __useGetOrderQuery__
 *
 * To run a query within a React component, call `useGetOrderQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOrderQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOrderQuery({
 *   variables: {
 *      getOrderId: // value for 'getOrderId'
 *      populate: // value for 'populate'
 *   },
 * });
 */
export function useGetOrderQuery(baseOptions: Apollo.QueryHookOptions<GetOrderQuery, GetOrderQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetOrderQuery, GetOrderQueryVariables>(GetOrderDocument, options);
      }
export function useGetOrderLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetOrderQuery, GetOrderQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetOrderQuery, GetOrderQueryVariables>(GetOrderDocument, options);
        }
export type GetOrderQueryHookResult = ReturnType<typeof useGetOrderQuery>;
export type GetOrderLazyQueryHookResult = ReturnType<typeof useGetOrderLazyQuery>;
export type GetOrderQueryResult = Apollo.QueryResult<GetOrderQuery, GetOrderQueryVariables>;
export const GetOrdersDocument = gql`
    query GetOrders($populate: Boolean!) {
  getOrders {
    billingDate
    code
    dueDate
    id
    items(populate: $populate) {
      id
      amount
      product {
        id
        code
        label
      }
      unitPrice
    }
  }
}
    `;

/**
 * __useGetOrdersQuery__
 *
 * To run a query within a React component, call `useGetOrdersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOrdersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOrdersQuery({
 *   variables: {
 *      populate: // value for 'populate'
 *   },
 * });
 */
export function useGetOrdersQuery(baseOptions: Apollo.QueryHookOptions<GetOrdersQuery, GetOrdersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetOrdersQuery, GetOrdersQueryVariables>(GetOrdersDocument, options);
      }
export function useGetOrdersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetOrdersQuery, GetOrdersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetOrdersQuery, GetOrdersQueryVariables>(GetOrdersDocument, options);
        }
export type GetOrdersQueryHookResult = ReturnType<typeof useGetOrdersQuery>;
export type GetOrdersLazyQueryHookResult = ReturnType<typeof useGetOrdersLazyQuery>;
export type GetOrdersQueryResult = Apollo.QueryResult<GetOrdersQuery, GetOrdersQueryVariables>;
export const CreateOrderDocument = gql`
    mutation CreateOrder($createOrderInput: CreateOrderInput!) {
  createOrder(createOrderInput: $createOrderInput) {
    code
    id
  }
}
    `;
export type CreateOrderMutationFn = Apollo.MutationFunction<CreateOrderMutation, CreateOrderMutationVariables>;

/**
 * __useCreateOrderMutation__
 *
 * To run a mutation, you first call `useCreateOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOrderMutation, { data, loading, error }] = useCreateOrderMutation({
 *   variables: {
 *      createOrderInput: // value for 'createOrderInput'
 *   },
 * });
 */
export function useCreateOrderMutation(baseOptions?: Apollo.MutationHookOptions<CreateOrderMutation, CreateOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateOrderMutation, CreateOrderMutationVariables>(CreateOrderDocument, options);
      }
export type CreateOrderMutationHookResult = ReturnType<typeof useCreateOrderMutation>;
export type CreateOrderMutationResult = Apollo.MutationResult<CreateOrderMutation>;
export type CreateOrderMutationOptions = Apollo.BaseMutationOptions<CreateOrderMutation, CreateOrderMutationVariables>;
export const UpdateOrderDocument = gql`
    mutation UpdateOrder($updateOrderId: String!, $updateOrderInput: UpdateOrderInput!) {
  updateOrder(id: $updateOrderId, updateOrderInput: $updateOrderInput) {
    code
    id
  }
}
    `;
export type UpdateOrderMutationFn = Apollo.MutationFunction<UpdateOrderMutation, UpdateOrderMutationVariables>;

/**
 * __useUpdateOrderMutation__
 *
 * To run a mutation, you first call `useUpdateOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOrderMutation, { data, loading, error }] = useUpdateOrderMutation({
 *   variables: {
 *      updateOrderId: // value for 'updateOrderId'
 *      updateOrderInput: // value for 'updateOrderInput'
 *   },
 * });
 */
export function useUpdateOrderMutation(baseOptions?: Apollo.MutationHookOptions<UpdateOrderMutation, UpdateOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateOrderMutation, UpdateOrderMutationVariables>(UpdateOrderDocument, options);
      }
export type UpdateOrderMutationHookResult = ReturnType<typeof useUpdateOrderMutation>;
export type UpdateOrderMutationResult = Apollo.MutationResult<UpdateOrderMutation>;
export type UpdateOrderMutationOptions = Apollo.BaseMutationOptions<UpdateOrderMutation, UpdateOrderMutationVariables>;
export const RemoveOrderDocument = gql`
    mutation RemoveOrder($removeOrderId: String!) {
  removeOrder(id: $removeOrderId) {
    code
    id
  }
}
    `;
export type RemoveOrderMutationFn = Apollo.MutationFunction<RemoveOrderMutation, RemoveOrderMutationVariables>;

/**
 * __useRemoveOrderMutation__
 *
 * To run a mutation, you first call `useRemoveOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeOrderMutation, { data, loading, error }] = useRemoveOrderMutation({
 *   variables: {
 *      removeOrderId: // value for 'removeOrderId'
 *   },
 * });
 */
export function useRemoveOrderMutation(baseOptions?: Apollo.MutationHookOptions<RemoveOrderMutation, RemoveOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveOrderMutation, RemoveOrderMutationVariables>(RemoveOrderDocument, options);
      }
export type RemoveOrderMutationHookResult = ReturnType<typeof useRemoveOrderMutation>;
export type RemoveOrderMutationResult = Apollo.MutationResult<RemoveOrderMutation>;
export type RemoveOrderMutationOptions = Apollo.BaseMutationOptions<RemoveOrderMutation, RemoveOrderMutationVariables>;
export const RemoveOrdersDocument = gql`
    mutation RemoveOrders($ids: [String!]!) {
  removeOrders(ids: $ids)
}
    `;
export type RemoveOrdersMutationFn = Apollo.MutationFunction<RemoveOrdersMutation, RemoveOrdersMutationVariables>;

/**
 * __useRemoveOrdersMutation__
 *
 * To run a mutation, you first call `useRemoveOrdersMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveOrdersMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeOrdersMutation, { data, loading, error }] = useRemoveOrdersMutation({
 *   variables: {
 *      ids: // value for 'ids'
 *   },
 * });
 */
export function useRemoveOrdersMutation(baseOptions?: Apollo.MutationHookOptions<RemoveOrdersMutation, RemoveOrdersMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveOrdersMutation, RemoveOrdersMutationVariables>(RemoveOrdersDocument, options);
      }
export type RemoveOrdersMutationHookResult = ReturnType<typeof useRemoveOrdersMutation>;
export type RemoveOrdersMutationResult = Apollo.MutationResult<RemoveOrdersMutation>;
export type RemoveOrdersMutationOptions = Apollo.BaseMutationOptions<RemoveOrdersMutation, RemoveOrdersMutationVariables>;