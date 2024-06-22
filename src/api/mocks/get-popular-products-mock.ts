import { http, HttpResponse } from 'msw'

import { GetPopularProductsResponse } from '../get-popular-products'

export const getPopularProductsMock = http.get<
  never,
  never,
  GetPopularProductsResponse
>('/metrics/popular-products', () => {
  return HttpResponse.json([
    { product: 'Pizza Peperoni', amount: 30 },
    { product: 'Pizza Mussarela', amount: 50 },
    { product: 'Pizza Portuguesa', amount: 35 },
    { product: 'Pizza 4 Queijos', amount: 35 },
    { product: 'Pizza Toscana', amount: 40 },
    { product: 'Pizza Frango com Catupiry', amount: 40 },
  ])
})
