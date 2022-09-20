export interface ProductsType {
  id: number,
  name: string,
  amount: string
}

export interface GetProducts extends ProductsType{
  orderId: null | number
}