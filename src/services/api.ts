import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

type PurchaseResponse = {
  orderId: string
}

type Products = {
  id: number
  price: number
}

type PurchasePayload = {
  products: Products[]
  delivery: {
    receiver: string
    address: {
      description: string
      city: string
      zipCode: string
      number: number
      complement: string
    }
  }
  payment: {
    card: {
      name: string
      number: string
      code: number
      expires: {
        month: number
        year: number
      }
    }
  }
}

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood/'
  }),
  endpoints: (builder) => ({
    getRestaurants: builder.query<RestaurantType[], void>({
      query: () => 'restaurantes'
    }),
    getRestaurantsById: builder.query<RestaurantType, string>({
      query: (id) => `restaurantes/${id}`
    }),
    getResponse: builder.mutation<PurchaseResponse, PurchasePayload>({
      query: (body) => ({
        url: 'checkout',
        method: 'POST',
        body
      })
    })
  })
})

export const {
  useGetRestaurantsQuery,
  useGetRestaurantsByIdQuery,
  useGetResponseMutation
} = api
export default api
